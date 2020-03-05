from flask import Flask, request, redirect ,url_for

app = Flask(__name__)

# adding configuration values to flask:
app.config['DEBUG'] = True


#_______________________________________________________________________

@app.route('/')
def index():
    return'<h4>index page<h1>'

@app.route('/homepage',methods=['POST','GET'], defaults={'name' : '****'})
@app.route('/homepage/<name>',methods=['POST','GET'])
def homepage(name):
    return f'''<h2>Hi {name!r} are on the home page..</h2>
              <form action="/homepage/edit">
                <input type="submit" value="Edit">
              </form>'''  



@app.route('/homepage/edit', methods=['GET', 'POST'])
def homepageform(): 
    if request.method == 'GET':
        return'''    
            <head>    
                <title>homepage/edit</title>
            </head>
            <body>
                <form action="/homepage/edit" method="POST">
                    <p>name: <input type="text" name='name'>
                             <input type="submit">
                    </p>
                </form>
            </body>
                ''' 

    else:

        name = request.form['name']
        return redirect(url_for('homepage', name=name))




if __name__ == '__main__':
    app.run()