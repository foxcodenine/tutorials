# https://www.youtube.com/watch?v=PA5dt72pGR8

# ______________________________________________________________________

#  add_url_rule is an alternative way of registering route

from flask import Flask 

app = Flask(__name__)
app.config['DEBUG'] = True

def morning():
    return "Good morning mate!"

def noon():
    return "Good afternoon sir!"

def evening():
    return "Good evening dear!"


# ______________________________________________________________________

# app.add_url_rule("/path", "endpoint_name", view_function)


app.add_url_rule("/morning", "morning", morning)

app.add_url_rule("/afternoon", "noon", noon)

app.add_url_rule("/evening", "evening", evening)

if __name__ == "__main__":
    app.run()