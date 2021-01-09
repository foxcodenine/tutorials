from flask import Flask, render_template 

app =Flask(__name__) 

@app.route("/") 
@app.route("/<user>")  
def index(user=None):
    return render_template("user.html", user=user) 

@app.route("/shopping")
def shopping():
    shopping_list = ["Cheese", "Tuna", "Beef", "Bacon"] 
    return render_template("shopping.html", s_list=shopping_list)


if __name__ == "__main__":  
    app.run()