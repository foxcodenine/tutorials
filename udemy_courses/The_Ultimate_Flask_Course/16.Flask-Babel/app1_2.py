# https://pythonhosted.org/Flask-Babel/
# ______________________________________________________________________

from flask import Flask, render_template, url_for, redirect, request 
from flask_babel import Babel, get_locale

# ______________________________________________________________________

app = Flask(__name__)

app.config['DEBUG'] = True

babel = Babel(app) 
# ______________________________________________________________________

@babel.localeselector
def localeselector():
    # return 'en_UK'
    return request.accept_languages.best_match(['en', 'es','de','ru','mt'])



@app.route('/')
def index():
    return '<h2>Locale: {}</h2>'.format(get_locale())


# ______________________________________________________________________

if __name__ == '__main__':
    app.run()