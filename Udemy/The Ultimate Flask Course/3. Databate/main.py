from flask import Flask, render_template, request, redirect, config, g, url_for
import sqlite3

app = Flask(__name__)

app.config['DEBUG'] = True

#_______________________________________________________________________

                                                        #connect funtion
def connect_db():
    """Connects to the specific database."""
    sql = sqlite3.connect('data.db')
    sql.row_factory = sqlite3.Row
    return sql 

                                                   #get detabase funtion
def get_db():
    """Opens a new database connection if there is none yet for the
    current application context.
    g is a general purpose variable associated with the current 
    application context
    """
    if not hasattr(g, 'sqlite_db'):
        g.sqlite_db = connect_db()
    return g.sqlite_db

                                                #close database function
@app.teardown_appcontext
def close_db(error):
    """Closes the database again at the end of the request."""
    if hasattr(g, 'sqlite_db'):
        g.sqlite_db.close()
#_______________________________________________________________________

@app.route('/subscribe', methods=['GET', 'POST'])
def subscribe():
    return render_template('subscribe.html')


#_______________________________________________________________________


@app.route('/confirm', methods=['GET', 'POST'])
def confirm():

    db_name = request.form['name']
    db_location = request.form['location']

    db = get_db() 
    db.execute(
        """INSERT INTO users 
        (name, location) VALUES (?, ?)""",  [db_name, db_location])
    db.commit()

    db = get_db()
    cursor = db.execute('SELECT id, name, location FROM users')       
    results = cursor.fetchall()
    return render_template('confirm.html', 
                            id = results[-1]['id'],
                            name = results[-1]['name'],
                            location = results[-1]['location'])

           

#_______________________________________________________________________

@app.route('/')
def index():

    db = get_db()
    cur = db.execute("SELECT * FROM users")
    results= cur.fetchall()

    return render_template('database_page.html', results = results)

#_______________________________________________________________________


if __name__ == '__main__':
    app.run()