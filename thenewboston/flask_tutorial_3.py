# Tutorial - 3 - HTTP Methods

from flask import Flask, request 
# the request module gives information how the user requested a resource

app = Flask(__name__) 

@app.route("/") 
def index(): 
    return "Method used: %s" % request.method 


@app.route("/bacon", methods=['GET', 'POST'])
def bacon():
    if request.method == 'POST':
        return "You are using 'POST'"
    elif request.method == 'GET':
        return "You are using 'GET'"
    else:
        return "Method used: %s" % request.method

if __name__ == "__main__":
    app.run() 

