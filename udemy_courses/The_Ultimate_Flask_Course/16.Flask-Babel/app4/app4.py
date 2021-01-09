# https://pythonhosted.org/Flask-Babel/
# ______________________________________________________________________


from flask import Flask, render_template, url_for, redirect, request 
from flask_babel import Babel, get_locale, format_date, format_datetime, gettext 
from datetime import date, datetime

# ______________________________________________________________________

app = Flask(__name__)

app.config['DEBUG'] = True

babel = Babel(app) 
# ______________________________________________________________________

@babel.localeselector
def localeselector():
    # return 'en_UK'
    return request.accept_languages.best_match(['en_US','en_GB', 'es_ES', 'de_DE'])



@app.route('/')
def index():
    d = date(2011, 1, 8)
    dt = datetime(2010, 4, 9, 21, 13)

    local_date = format_date(d)
    local_datetime = format_datetime(dt)

    python = gettext('Python')
    chris = gettext('Christopher')


    return render_template('index.html', Local=get_locale(), \
       Local_date=local_date, Local_datetime=local_datetime, \
       chris=chris, python=python)

# ______________________________________________________________________

# pybabel command:

# pybabel extract -F babel.cfg -o messages.pot .
# pybabel init -i messages.pot -d translations -l es     
# pybabel compile -d translations


# ______________________________________________________________________

if __name__ == '__main__':
    app.run()