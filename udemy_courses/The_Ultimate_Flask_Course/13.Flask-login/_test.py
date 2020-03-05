
from flask import Flask, url_for, redirect, render_template, request, session
from urllib.parse import urlparse, urljoin

app = Flask(__name__) 
app.config['SECRET_KEY'] = 'ThisIsASecret!'
app.config['DEBUG'] = True



@app.route('/home')
def index():

    ref_url = urlparse(request.host_url)
    target = 'home'
    test_url = urlparse(urljoin(request.host_url,target))
    
    return f'{ref_url}<br>{test_url}'


if __name__ == '__main__':
    app.run()
