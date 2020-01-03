from flask import Flask, render_template
from babel import numbers, dates
from datetime import date, time, datetime
# ______________________________________________________________________


app = Flask(__name__) 

# ______________________________________________________________________

app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'ThisIsASecret'

# ______________________________________________________________________


@app.route('/')
def index():

    d = date(1984, 8, 12)
    t = time(22, 16)


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
    }
        

    return render_template('index.html', results=results) 

# ______________________________________________________________________

if __name__ == '__main__':
    app.run()