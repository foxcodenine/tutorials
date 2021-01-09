from flask import Flask, redirect, url_for, render_template
from uuid import uuid4
# ______________________________________________________________________

app = Flask(__name__)

app.config['DEBUG'] = True
app.config['SECRET_KEY'] = uuid4().hex

# ______________________________________________________________________
# tutorial #1

@app.route("/mysite/")
def index():
    return "Hello! this is my site!"


@app.route("/mysite/<name>/")
def user(name):
    return '<h3>Hello {} nice to meet you!</h3>'.format(name)

@app.route("/mysite/admin")
def admin():
    return redirect(url_for('index'))

# ______________________________________________________________________
# tutorial #2

@app.route('/website/restricted/<name>')
def restricted(name):
    return '<h3>This is a restricted area {}!</h3>'.format(name)

@app.route('/website/admin')
def admin2():
    return redirect(url_for('restricted', name='Chris'))


@app.route('/website/profile/<name>')
@app.route('/website/profile/', defaults = {'name' : ''})

def profile(name):
    return render_template('profile.html', content=name)

# ______________________________________________________________________


if __name__ == '__main__':
    app.run()