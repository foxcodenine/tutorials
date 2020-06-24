# https://uniwebsidad.com/libros/explore-flask/chapter-5/instance-folder
# _______________________________________________________

from flask import Flask, Markup, make_response, jsonify, request, render_template

app = Flask(
    __name__,
    instance_relative_config=True,
    template_folder="templates2",
    static_folder="static"
)

# _______________________________________________________
# Configuration Basics
# app.config['TESTING'] = True

# To update multiple keys at once you can use the dict.update() method:

# app.config.update(
#     Testing=True,
#     SECRET_KEY='this_is_my_secret'
# )

# _______________________________________________________
# Environment and Debug Features
 
#   The Environment can be set to production or development ex:
#   app.config['FLASK_ENV'] = 'production'

#   ideal install python-dotenv craete a .env file and set it there:
#   '.env':     FLASK_ENV = 'production
#   you need to install python-dotenv

# _______________________________________________________

# Configuring from File


# An interesting pattern is also to use classes and inheritance for
# configuration:

# pipenv install python-dotenv
#'.env':
# FLASK_ENV = 'production'

# 'configmodule.py':

# class Config(object):
#     DEBUG = False
#     TESTING = False
#     DATABASE_URI = 'sqlite:///:memory:'

# class ProductionConfig(Config):
#     DATABASE_URI = 'mysql://user@localhost/foo'

# class DevelopmentConfig(Config):
#     DEBUG = True

# class TestingConfig(Config):
#     TESTING = True


# To enable such a config you just have to call into from_object():



# 'app.py':


from dotenv import load_dotenv
load_dotenv()


if app.config["ENV"] == "production":
    app.config.from_object('config.ProductionConfig')
else:
    app.config.from_object('config.DevelopmentConfig')


# _______________________________________________________
# Instance folder

# Flask gives us a feature called instance folders. The instance folder
# is a sub-directory of the repository root and contains a configuration
# file specifically for this instance of the application.

    # config.py
    # requirements.txt
    # run.py
    # instance/
    #   config.py
    # yourapp/
    #   __init__.py
    #   models.py
    #   views.py
    #   templates/
    #   static/

# To load configuration variables from an instance folder, we use
# app.config.from_pyfile(). If we set instance_relative_config=True
# when we create our app with the Flask() call,
# app.config.from_pyfile() will load the specified file from the
# instance/ directory.


# app = Flask(__name__, instance_relative_config=True)
# app.config.from_object('config')
# app.config.from_pyfile('config.py')

# _______________________________________________________
# A Basic Flask Route

@app.route('/')
def index():
    return 'hello flask'


def squareOfNumberPlusNine(num):
    return (num**2) + 9

@app.route('/logic')
def logic():
    value = squareOfNumberPlusNine(5)
    return value

@app.route('/markup')
def markup():
    return Markup('<h1 style="color:red;">Hello Flask!</h1>')
# _______________________________________________________

@app.route('/temp_test')
def temp_test():
    return render_template('test_template.html')

# _______________________________________________________
# Serving a Response (createing an API)

@app.route("/api")
def api():
    headers = {"Content-Type": "application/json", "name": "christopher"}
    return make_response('it worked!', 200, headers)

# Specify if route is a POST, GET, or some other method.

@app.route("/api2")
def api2():
    if request.method != 'GET':
        return make_response('Malformed request', 400)
    headers = {"Content-Type": "application/json"}
    return make_response('it worked api2!', 200, headers)

# To create JSON responses, check out Flask's built-in jsonify() function.

@app.route('/api3')
def api3():
    if request.method != 'GET':
        return make_response('Malformed request', 400)
    
    my_dict = {'key': 'dictionary value', 'name': 'christopher', 'surname': 'farrugia'}
    headers = {'Content-Type': "application/json"}
    return make_response(jsonify(my_dict), 200, headers)

# _______________________________________________________
print('CHECK_ENV = ',app.config['CHECK_ENV'])

if __name__ == '__main__':
    app.run()






