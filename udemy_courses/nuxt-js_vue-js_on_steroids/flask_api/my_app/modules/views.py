from flask import redirect, request, jsonify, Blueprint, url_for, flash, render_template
from my_app import app


nuxtAPI = Blueprint('nuxtAPI', __name__, url_prefix='/nuxtAPI')

@nuxtAPI.route('/', methods=['POST', 'GET'])
def api():
    request_xhr_key = request.headers.get('API-Nuxt-Key')

    if request_xhr_key and request_xhr_key == '123#456#789':

        api_object = {
            'title': 'The Mandalorian'
        }

        return jsonify(api_object)




    return '<p>The Mandalorian</p>'
    