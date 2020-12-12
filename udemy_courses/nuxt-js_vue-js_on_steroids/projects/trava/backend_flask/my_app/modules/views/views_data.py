from my_app import app
from flask import Blueprint, jsonify

# ______________________________________________________________________

app_data = Blueprint('app_data', __name__, url_prefix='/trava/data')

# ______________________________________________________________________

@app_data.route('/')
def data():
    return jsonify({'message': 'data route works!'})

