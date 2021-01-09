from flask import Flask

app = Flask(__name__)

# ______________________________________________________________________

if app.config['ENV'] == 'production':
    app.config.from_object('config.ConfigProduction')
else:
    app.config.from_object('config.ConfigDevelopment')
# ______________________________________________________________________

# Multiple routes with a single function:
@app.route('/')
@app.route('/home/')
@app.route('/index/')
def index():
    print('<<<<',app.config['SECRET_KEY'],'>>>>')
    return '<h4>{}</h4>'.format(app.config['CHECK_ENV'])

print('<<<<',app.config['SECRET_KEY'],'>>>>')

if __name__ == '__main__':
    app.run()


