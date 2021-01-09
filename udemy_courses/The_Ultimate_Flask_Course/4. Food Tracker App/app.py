from flask import Flask, render_template, config, g, request, url_for
from datetime import datetime
import sqlite3
from food_tracker import connect_db, get_db

app = Flask(__name__) 

app.config['DEBUG'] = True

#_______________________________________________________________________

# DataBase funtions:

@app.teardown_appcontext 
def close_df(error):
    if hasattr(g, 'sqlite_db'):
        g.sqlite_db.close()

#_______________________________________________________________________

# Routes for all 3 web pages:


@app.route('/', methods=['POST', 'GET'])
def index():

    db = get_db()

    if request.method == 'POST':

        # I added the try & except, to pass empty date selection.
        # ValueError (Add is presed with out selecting date.)
        try:     
            date_form = request.form['date']              # 'yyyy-mm-dd'
            date_object = datetime.strptime(date_form, '%Y-%m-%d')
            date_db = datetime.strftime(date_object, '%Y%m%d')



        #__________
        # I have added this piece of code so i can't add same dates to db:

            curr_existing_dates = db.execute(
                "SELECT entry_date FROM log_date ORDER BY entry_date DESC;"
            )
            results_existing_dates = curr_existing_dates.fetchall()

            list_of_existing_dates = []

            for r in results_existing_dates:     
                r_object = datetime.strptime(str(r['entry_date']), '%Y%m%d') 
                r_string = datetime.strftime(r_object, '%Y%m%d')
                list_of_existing_dates.append(r_string)                   

            if str(date_db) in list_of_existing_dates:
                pass
        #__________
            
            else:
                with app.app_context():     # Need to add this becasue I am getting:
                                            # RuntimeError: Working outside of application context. 

                                                                    
                    db.execute("INSERT INTO log_date (entry_date) VALUES (?)", [date_db])            
                    db.commit()

        except ValueError:
            pass

    curr = db.execute(
"""
SELECT log_date.entry_date, sum(food.protein)as protein, 
sum(food.carbohydrates)as carbohydrates, 
sum(food.fat)as fat, sum(food.calories)as calories
FROM log_date 
LEFT JOIN food_date ON log_date.id = food_date.log_date_id 
LEFT JOIN food ON food_date.food_id = food.id
GROUP BY log_date.id
ORDER BY entry_date DESC"""
)

    results = curr.fetchall()

    list_of_dict_dates = [] # <- (1)
    
    for r in results:    # <- (2)
        r_object = datetime.strptime(str(r['entry_date']), '%Y%m%d') # <- (3)
        single_date = {} # <- (4)
        single_date['view_date'] = r['entry_date'] # <- (5)
        single_date['pretty_date'] = datetime.strftime(r_object, '%B %d, %Y') # <- (6)
        single_date['protein'] = r['protein'] # <- (7)
        single_date['carbohydrates'] = r['carbohydrates']
        single_date['fat'] = r['fat']
        single_date['calories'] = r['calories']
        list_of_dict_dates.append(single_date) # <- (8)


        # (1) Each dict in the list take 2 formats of the same date 
        #     one for the date bar and the other for the view button.
        # (2) Iterate over each row of data, retrieved from database.
        # (3) Changing the data to str and than to datetime object. 
        #     remember the row r return as a dict. {column_name : value}
        # (4) Creating an empty dict for the current day
        # (5) Adding the date for the view button with a key named 'view_date'.
        # (6) Chaning back to str in the format need it for date bar 
        #     and adding it to dict with 'pretty_date' as key
        # (7) Adding the day Totals
        # (8) Append single_date to list.

    return render_template('home.html', dates=list_of_dict_dates) 

#__________

@app.route('/view/<date>', methods=['GET', 'POST'])  # ex: http://127.0.0.1:5000/view/20190901
def view(date):

    db = get_db()

    date_cur = db.execute(
        "SELECT id, entry_date FROM log_date WHERE entry_date = ?", [date]
    )    
    results_date = date_cur.fetchone()


    if request.method=='POST':

        db.execute("""INSERT INTO food_date (food_id, log_date_id) 
        VALUES (?, ?)""",[request.form['food-select'], results_date['id']]) 
        db.commit()     

        # return'<h2>food_id:{0}, date_id:{1}</h2>'.format(request.form['food-select'], \
        # results_date['id'])


    object_date = datetime.strptime(str(results_date['entry_date']), '%Y%m%d')
    pretty_date = datetime.strftime(object_date, '%B %d, %Y')
    

    food_cur = db.execute("SELECT id, name FROM food")
    result_food = food_cur.fetchall() 

    food_logs_cur = db.execute(
        """
        SELECT food.name, food.protein, food.carbohydrates, food.fat, food.calories
        FROM log_date 
        JOIN food_date ON log_date.id = food_date.log_date_id 
        JOIN food ON food_date.food_id = food.id
        WHERE log_date.entry_date = (?)""",[date])
    
    results_logs_food = food_logs_cur.fetchall()


    totals = {} 
    totals['protein'] = 0
    totals['carbohydrates'] = 0
    totals['fat'] = 0
    totals['calories'] = 0

    for foods in results_logs_food:
        totals['protein'] += foods['protein'] 
        totals['carbohydrates'] += foods['carbohydrates']
        totals['fat'] += foods['fat']
        totals['calories'] += foods['calories']


    return render_template(
        'day.html', entry_date=results_date['entry_date'], pretty_date=pretty_date, \
                    food=result_food, logs=results_logs_food, totals = totals
    )

#__________

@app.route('/food', methods=['GET',  'POST'])
def add():

    # create a database conection:
    db = get_db() 

    if request.method == 'POST':


        food_name = request.form['food-name']
        protein = int(request.form['protein'])
        carbohydrates = int(request.form['carbohydrates'])
        fat = int(request.form['fat'])

        calories = protein*4 + carbohydrates*4 + fat*9
        
        
        # Entering the request data from the form to the DataBase
        db.execute("""        
        INSERT INTO food(name, protein, carbohydrates, fat, calories) 
        VALUES(?, ?, ?, ?, ?)""", [food_name, protein, carbohydrates, fat, calories])
        db.commit()

    cur = db.execute("SELECT * FROM food")
    results = cur.fetchall()
        
 

    return render_template('add_food.html', results=results)

#_______________________________________________________________________

if __name__ == '__main__':
    app.run()
