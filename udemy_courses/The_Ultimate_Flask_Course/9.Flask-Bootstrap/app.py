# pip install flask-bootstrap

# Flask Bootstrap docs:
# https://pythonhosted.org/Flask-Bootstrap/

# ----------------------------------------------------------------------

from flask import Flask, render_template 
from flask_bootstrap import Bootstrap

app = Flask(__name__) 
bootstrap = Bootstrap(app) 

app.config['DEBUG'] = True 

@app.route('/') 
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()

