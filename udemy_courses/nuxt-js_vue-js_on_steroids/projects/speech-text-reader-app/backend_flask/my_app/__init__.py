# pipenv install pyjwt

# pipenv install flask-bcrypt
# https://flask-bcrypt.readthedocs.io/en/latest/
# ______________________________________________________________________

from flask import Flask, jsonify, render_template, Blueprint
from flask_sqlalchemy import SQLAlchemy 
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin

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
CORS(app)
# ______________________________________________________________________

from my_app.modules.database import TSA_Admin, TSA_Data, TSA_Users
from my_app.modules.views.views_user import app_user
from my_app.modules.views.views_admin import app_admin
from my_app.modules.views.views_data import app_data

app.register_blueprint(app_data)
app.register_blueprint(app_admin)
app.register_blueprint(app_user)


# ______________________________________________________________________

@app.route('/')
def index():
    return '{} {}'.format(app.config['CHECK_ENV'], app.config['SECRET_KEY'][::-1])