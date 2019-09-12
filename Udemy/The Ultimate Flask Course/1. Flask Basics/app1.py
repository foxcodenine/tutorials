from flask import Flask 

app = Flask(__name__) 



# basic route

@app.route('/') 
def index():
    return '<h3>index page - hello world!</h3>'

#____________________________________________________________

# in this route we added another page "home"
# also we specify the methods to use 

@app.route('/home', methods=['GET', 'POST'])
def home():
    return '<h3>..hi flask this is the "./home" page!</h3>'


#____________________________________________________________


# at 'a' we added a veriable to the route 
# and at 'b' we set it to a default value 


@app.route('/profile/<name>')                               # <-(a)
@app.route('/profile/', defaults={'name' : 'cookey'} )      # <-(b)
def profile(name):
    return f'<h3>..and this is your profile page {name!r}</h3>'


#____________________________________________________________

# in this route we set the variable to a type (in this case an 'int')

@app.route('/contact/<int:number>')
def contact(number):
    return (
'<h3>..if you have any question, contact me at {!r}</h3>'.format(number)
        )  

#____________________________________________________________

# this route return json syntex instead of HTML

from flask import jsonify 

@app.route('/json')
def json():
    return jsonify({'key' : 'value',   'listkey' : [1,2,3,4,5]})




if __name__ == "__main__":
    app.run(debug=True)
