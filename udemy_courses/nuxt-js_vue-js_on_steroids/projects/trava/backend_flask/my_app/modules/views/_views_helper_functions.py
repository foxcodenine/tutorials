from my_app import app
from flask import request
import ast

import jwt
from jwt.exceptions import ExpiredSignatureError, InvalidSignatureError


# _______________________________

def check_header(request_xhr_key):
    if not request_xhr_key or request_xhr_key != '123#456#789':
        return True

# _______________________________

def retrive_data():


    data_str = request.data.decode("UTF-8")
    data_dict = ast.literal_eval(data_str)

    # print('>->',request.get_data())
    # print('>->',request.get_json()) # <-< better option

    return data_dict

# _______________________________

def validate_token(token):

    try:
        decoded = jwt.decode(token, app.config['SECRET_KEY'])
        
        return decoded['user_id']
    
    except ExpiredSignatureError :

        return False

