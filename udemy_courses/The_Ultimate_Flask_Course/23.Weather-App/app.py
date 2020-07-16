from flask import Flask, render_template, redirect, url_for, request, flash
from flask_sqlalchemy import SQLAlchemy
import requests
import os
from pprint import pprint

# ______________________________________________________________________

app = Flask(__name__)


if app.config['ENV'] == 'development':
    app.config.from_object('config.ConfigDev')
else:
    app.config.from_object('config.ConfigPro')
# ______________________________________________________________________


db = SQLAlchemy(app)
class Cities(db.Model):
    __tablename__ = 'cities'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(), nullable=False)


# ______________________________________________________________________

@app.route('/', methods=['POST', 'GET'])
def index(): 

    data = None

    if request.method == 'POST':

        city = request.form['city_name']

        

        url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={os.getenv("API_KEY")}&units=metric'

        r = requests.get(url).json()

        if not r.get('name') :
            flash('City not found!', 'is-danger')
            return redirect(url_for('index'))

        icon = (f"http://openweathermap.org/img/w/{r['weather'][0]['icon']}.png")
        
        data = {
            'city': r['name'],
            'country': r['sys']['country'], 
            'temp': r['main']['temp'],
            'description': r['weather'][0]['description'],
            'icon': icon
        }
    

    return render_template('weather.html', data=data)

# ____________________________________

@app.route('/all_cities')
def all_cities(): 

    cities = Cities.query.all()

    weather_data = []
    
    for city in cities:
        id = city.id
        city = city.name
        url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={os.getenv("API_KEY")}&units=metric'

        r = requests.get(url).json()
        icon = (f"http://openweathermap.org/img/w/{r['weather'][0]['icon']}.png")
        
        data = {
            'city': r['name'],
            'country': r['sys']['country'], 
            'temp': r['main']['temp'],
            'description': r['weather'][0]['description'],
            'icon': icon,
            'id': id
        }

        weather_data.append(data)
    
    return render_template('weather.html', weather_data=weather_data, current_route='all_cities')



# ____________________________________

@app.route('/api/')
def api(): 
    city = 'valleta'
    url = f'api.openweathermap.org/data/2.5/weather?q={city}&appid={os.getenv("API_KEY")}&units=metric'
    
    return redirect(f"http://{url}")

# ____________________________________

@app.route('/add_city/', methods=['POST'])
def add_city():

    # Set city name to lowercase
    city = request.form['city_name'].lower()
    # Check if city is in tha api database
    r_code = requests.get(f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={os.getenv("API_KEY")}&units=metric').json().get('cod')



    if Cities.query.filter_by(name = city).first(): 

        
        flash('City already listed!', 'is-danger')      
        redirect(url_for('all_cities'))

    elif r_code != 200:

        
        flash('City not found!', 'is-danger')
    else:                
        new_city = Cities(name=city)
        db.session.add(new_city)
        db.session.commit()
        flash('City add to list successfully!', 'is-success')
    return redirect(url_for('all_cities'))

# ____________________________________

@app.route('/remove_city/<id>')
def remove_city(id):


    remove_id = Cities.query.filter_by(id=id).first()

    db.session.delete(remove_id)
    db.session.commit()
    flash('City removed from list successfully!', 'is-success')
    return redirect(url_for('all_cities'))

    # return f'{id}'


# ____________________________________

@app.route('/db')
def database():
    # db.create_all()
    # db.session.commit()

    # seattle = Cities(name='Seattle')
    # london = Cities(name='London')
    # paris = Cities(name='Paris')
    # valletta = Cities(name='Valletta')

    # db.session.add_all([seattle, london, paris, valletta])
    # db.session.commit()
    return '<p>db updated</p>'

# ______________________________________________________________________


if __name__ == '__main__':

    print('>>>', app.config['CHECK_ENV'])
    print('>>>', app.config['SQLALCHEMY_DATABASE_URI'])


    app.run()