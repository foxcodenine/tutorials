from my_app import app 
from flask_cors import CORS, cross_origin

CORS(app)

if __name__ == "__main__":
    app.run()