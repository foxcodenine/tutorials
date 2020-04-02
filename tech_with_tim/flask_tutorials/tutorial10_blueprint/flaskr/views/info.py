from flask import Blueprint, render_template

info = Blueprint('info', __name__, url_prefix='/info')

@info.route('/about')
def about():
    return render_template('info/about.html')


@info.route('/security')
def security():
    return render_template('info/security.html')
    