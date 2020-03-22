from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__) 

app.config['DEBUG'] = True
# ______________________________________________________________________
# tutorial #3

@app.route("/")
def index():
    return render_template('index.html', content='Testing Index Page')

@app.route("/new_page")
def new_page():
    return render_template('new_page.html')

# ______________________________________________________________________
# tutorial #4
@app.route('/login', methods=['POST','GET'])
def login():

    if request.method == 'POST':
        user = request.form['name']
        return redirect(url_for('user', usr=user))


    return render_template('login.html')


@app.route('/<usr>')
def user(usr):
    return f'<h2 >Yes they do {usr}!</h2>'



if __name__ == '__main__':
    app.run()