from my_app import app 
from flask_cors import CORS, cross_origin
import os

CORS(app)
# app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

if __name__ == "__main__":    
    app.run(host='0.0.0.0', port=4448)
