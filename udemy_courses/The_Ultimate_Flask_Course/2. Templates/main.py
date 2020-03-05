from flask import Flask, url_for, redirect, request, render_template, config

app = Flask(__name__)

app.config['DEBUG'] = True


# In this route we used the render_template to return an html page.
# We passed the 'name' and 'display' variable as parameter to utilize 
# them in the htlm page.

@app.route('/<name>')
@app.route('/', defaults={'name': 'Cookey'})
def index(name):
    return render_template('variables_and_conditions.html', name=name, display=False)

import os

@app.route('/loops')
def loops():
    
    return render_template('loops.html', 
                list_of_numbers=['one', 'two', 'three', 'four', 'five'],
                list_of_dict=[{'name' : 'Andrew'}, {'name' : 'Dorothy'}])


if __name__ == '__main__':
    app.run()
