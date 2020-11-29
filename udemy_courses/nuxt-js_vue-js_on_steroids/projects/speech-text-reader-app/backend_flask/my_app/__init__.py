# pipenv install pyjwt

# pipenv install flask-bcrypt
# https://flask-bcrypt.readthedocs.io/en/latest/
# ______________________________________________________________________

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy 
from flask_bcrypt import Bcrypt

def create_app():
    app = Flask(__name__)

    if app.config['ENV'] == 'development':
        app.config.from_object('config.ConfigDev')
    else:
        app.config.from_object('config.ConfigPro')
    return app

app = create_app()
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
# ______________________________________________________________________

from my_app.modules.database import TSA_Admin, TSA_Data, TSA_Users


# ______________________________________________________________________

@app.route('/')
def index():
    return '{} {}'.format(app.config['CHECK_ENV'], app.config['SECRET_KEY'][::-1])