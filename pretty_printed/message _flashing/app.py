from flask import Flask, redirect, render_template, request, url_for, flash

app = Flask(__name__) 

app.config['DEBUG'] = True 
app.config['SECRET_KEY'] = 'This_is_a_secret' 

@app.route('/')
def index():
    flash('This is a flashed message!')
    flash('2nd flashed message :)')
    return redirect(url_for('example'))

@app.route('/example')
def example():
    return render_template('example.html')



if __name__ == '__main__':
    app.run()