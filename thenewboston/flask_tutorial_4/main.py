# Tutorial - 4 - HTML Templates
# Tutorial - 5 - Static Files

from flask import Flask, render_template 
app = Flask(__name__) 

@app.route("/profile/<name>") 
def profile(name): 
    return render_template("profile.html", name=name) 

if __name__ == "__main__":
    app.run()