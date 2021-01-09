from flask import Blueprint, render_template

public = Blueprint('public', __name__, url_prefix='')

@public.route('/login')
def login():
    return render_template('public/login.html')

@public.route('/signup')
def signup():
    return render_template('public/signup.html')

@public.route('/terms')
def terms():
    return render_template('public/terms.html')

