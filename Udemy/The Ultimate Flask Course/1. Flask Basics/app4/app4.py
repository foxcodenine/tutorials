from flask import Flask, redirect, request, session, url_for, render_template

app = Flask(__name__)

app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'thisisasecretcookey'

@app.route('/')
def index():
    return '<h3>index page</h3>'
            
@app.route('/subscribe', methods=['POST', 'GET'])
def subscribe():

    if request.method == 'GET':
        
        return render_template('subscribe.html')


    else:
        session['name'] = request.form['first']
        session['surname'] = request.form['last']
        session['email'] = request.form['email']
        session['day'] = request.form['day']
        session['month'] = request.form['month']
        session['year'] = request.form['year']
        session['gender'] = request.form['gender']

        return redirect(url_for('about'))


@app.route('/about', methods=['GET', 'POST'])
def about():
    
    
    if 'name' in session: name = session['name']
    else: name = None

    if 'surname' in session: surname = session['surname']
    else: surname = None

    if 'email' in session: email = session['email']
    else: email = None

    day = session['day'] 
    month = session['month'] 
    year = session['year']
    gender = session['gender']  

    return render_template(
'about.html', name=name, surname=surname, email=email, day=day, month=month, year=year, gender=gender
    )


if __name__ == '__main__':
    app.run()





