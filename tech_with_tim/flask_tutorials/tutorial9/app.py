from flask import Flask, render_template, redirect, url_for 
from uuid import uuid4
app = Flask(__name__) 

app.config['DEBUG'] = True 
app.config['SECRET_KEY'] = uuid4().hex 






@app.route("/home")
@app.route("/")
def home():
    return render_template("home.html")

if __name__ == "__main__":
    app.run()