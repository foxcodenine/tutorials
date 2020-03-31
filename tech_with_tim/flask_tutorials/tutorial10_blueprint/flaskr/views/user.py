from flask import Blueprint, Flask, render_template
import random

user = Blueprint('user', __name__) 

@user.route('/profile/')
def profile():
    return render_template('user/profile.html')