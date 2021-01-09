from my_app import app
from flask import Blueprint, jsonify

# ______________________________________________________________________

app_admin = Blueprint('app_admin', __name__, url_prefix='/trava/admin')

# ______________________________________________________________________

@app_admin.route('/')
def admin():
    return jsonify({'message': 'admin route works!'})