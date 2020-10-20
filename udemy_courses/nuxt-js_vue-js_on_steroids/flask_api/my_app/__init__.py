from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy 
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
CORS(app)

# ______________________________________________________________________
from my_app.modules.database import Posts
# db.create_all()
# db.session.commit()

from my_app.modules.views import nuxtAPI
app.register_blueprint(nuxtAPI)

# ______________________________________________________________________

@app.route('/')
def index():
    return '{} {}'.format(app.config['CHECK_ENV'], app.config['SECRET_KEY'])