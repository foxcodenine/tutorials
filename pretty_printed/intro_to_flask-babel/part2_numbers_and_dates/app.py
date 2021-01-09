from flask import Flask, render_template, request
from babel import numbers, dates
from datetime import date, time, datetime
from flask_babel import Babel, format_date, format_currency
from flask_babel import format_decimal, format_time, get_locale, gettext
# ______________________________________________________________________


app = Flask(__name__) 


# ______________________________________________________________________

app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'ThisIsASecret'
app.config['BABEL_DEFAULT_LOCALE'] = 'en'

babel =Babel(app)
# ______________________________________________________________________


@babel.localeselector
def localeselector():
    return request.accept_languages.best_match(
        ['en', 'es', 'de','mt_MT','en_AU', 'en_US', 'se_SE', 'en_GB', 'mt'])



@app.route('/')
def index():

    d = date(1984, 8, 12)
    t = time(22, 16)

    current_locale = str(get_locale())
    

    if current_locale in ['es', 'de','mt', 'se_SE']:        
        current_currency = 'EUR'
    elif current_locale == 'en_GB':
        current_currency = 'GBP'
    elif current_locale in ['en_AU']:
        current_currency = 'AUD'
    else:
        current_currency = 'USD'

    translate_current =  gettext('Current')

    us_num = numbers.format_decimal(1.2345, locale='en_US')
    us_cur = numbers.format_currency(1.2345, locale='en_US', currency='USD')
    us_date = dates.format_date(d, locale='en_US')
    us_time = dates.format_time(t, locale='en_US')

    se_num = numbers.format_decimal(1.2345, locale='se_SE')
    se_cur = numbers.format_currency(1.2345, locale='se_SE', currency='EUR')
    se_date = dates.format_date(d, locale='se_SE')
    se_time = dates.format_time(t, locale='se_SE')

    mt_num = numbers.format_decimal(1.2345, locale='mt_MT')
    mt_cur = numbers.format_currency(1.2345, locale='mt_MT', currency='EUR')
    mt_date = dates.format_date(d,  locale='mt_MT')
    mt_time = dates.format_time(t, locale='mt_MT')

    current_num = format_decimal(1.2345)
    current_cur = format_currency(1.2345,  currency=current_currency)
    current_date = format_date(d)
    current_time = format_time(t)

    
    
    results = {
        'us_num':us_num, 
        'us_cur':us_cur,
        'us_date':us_date,
        'us_time':us_time,
        'se_num':se_num,
        'se_cur':se_cur,
        'se_date':se_date,
        'se_time':se_time,
        'mt_num':mt_num,
        'mt_cur':mt_cur,
        'mt_date':mt_date,
        'mt_time':mt_time,
        'current_num': current_num,
        'current_cur': current_cur,
        'current_date': current_date,
        'current_time': current_time
    }
        

    return render_template(
        'index.html', results=results, current_locale=current_locale,
        current=translate_current) 

# ______________________________________________________________________

if __name__ == '__main__':
    app.run()

    # ______________________________________________________________________

# pybabel command:

# pybabel extract -F babel.cfg -o messages.pot .
# pybabel init -i messages.pot -d translations -l es     
# pybabel compile -d translations


# ______________________________________________________________________
    