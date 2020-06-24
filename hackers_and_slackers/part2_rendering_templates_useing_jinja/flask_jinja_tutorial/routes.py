from flask import current_app as app 
from flask import render_template, Blueprint

blue_view = Blueprint('view', __name__, url_prefix='/')

# ______________________________________________________________________

@blue_view.route('/home/')
def home():

    status = {'active': False, 'disabled': True}
    
    nav = [
        {'name': 'TheProject', 'url': 'http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html'},
        {'name': 'Software', 'url': 'http://line-mode.cern.ch/www/hypertext/WWW/Status.html'},
        {'name': 'Tecnical', 'url': 'http://line-mode.cern.ch/www/hypertext/WWW/Technical.html'},
        {'name': 'Help', 'url': 'http://line-mode.cern.ch/www/hypertext/WWW/Help.html'},
    ]

    return render_template(
                'home.html',
                title='Jinja Demo Site',
                description='Smarter page template with Flask & Jinja', 
                status = status, 
                nav=nav
    )



