# pipenv install pyjwt

# pipenv install flask-bcrypt
# https://flask-bcrypt.readthedocs.io/en/latest/
# ______________________________________________________________________
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy 
from flask_cors import CORS, cross_origin
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
CORS(app)
bcrypt = Bcrypt(app)

# ______________________________________________________________________
from my_app.modules.database import NuxtApiPosts
from my_app.modules.database import NuxtApiUsers
# db.create_all()
# db.session.commit()

from my_app.modules.views import nuxtAPI
app.register_blueprint(nuxtAPI)

# ______________________________________________________________________

@app.route('/')
def index():
    return '{} {}'.format(app.config['CHECK_ENV'], app.config['SECRET_KEY'])