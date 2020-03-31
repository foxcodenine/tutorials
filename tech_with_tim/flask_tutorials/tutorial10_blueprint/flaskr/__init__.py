
'''
For Linux and Mac:

$ export FLASK_APP=flaskr
$ export FLASK_ENV=development
$ flask run
For Windows cmd, use set instead of export:

> set FLASK_APP=flaskr
> set FLASK_ENV=development
> flask run
For Windows PowerShell, use $env: instead of export:

> $env:FLASK_APP = "flaskr"
> $env:FLASK_ENV = "development"   <- if this doen't work try the floowing:
> flask run


> $env:FLASK_DEBUG=1 
> python -m flask run


'''


# https://flask.palletsprojects.com/en/1.1.x/tutorial/factory/?highlight=setup
# https://flask.palletsprojects.com/en/1.1.x/config/?highlight=debug#DEBUG
# https://jinja.palletsprojects.com/en/2.9.x/api/
# http://exploreflask.com/en/latest/blueprints.html

from flask import render_template, blueprints, url_for, Flask
from uuid import uuid4
import random
from .views.user import user






app = Flask(__name__, instance_relative_config=True)

app.config['FLASK_DEBUG'] = True
app.config['SECRET_KEY'] = uuid4().hex 

app.register_blueprint(user, url_prefix='/user')




@app.route('/base')
def base():
    return render_template('base.html', image=random.randint(0,9))

@app.route('/')
def index():
    return render_template('index.html', image="""./static/images/{}.webp""".format(1))













if __name__ == '__main__':
    app.run()