from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

def create_app():
    app = Flask(__name__)

    if app.config['ENV'] == 'development':
        app.config.from_object('config.ConfigDev')
    else:
        app.config.from_object('config.ConfigPro')
    
    # CORS(app) # <- 1st you can do this 


    @app.route('/api')
    @cross_origin() # <- 2nd or this
    def api():
        return jsonify({
            'data' : 'this string is fetched from a flask api!'
        })
        
    return app

my_app = create_app()

