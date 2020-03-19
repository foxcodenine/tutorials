from flask import Flask, render_template, redirect, url_for

app = Flask(__name__) 

app.config['DEBUG'] = True

@app.route("/")
def index():
    return render_template('index.html', content='Testing')

@app.route("/new_page")
def new_page():
    return render_template('new_page.html')

if __name__ == '__main__':
    app.run()