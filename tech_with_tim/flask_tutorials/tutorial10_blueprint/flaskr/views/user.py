from flask import Blueprint, render_template


user = Blueprint('user', __name__, url_prefix='/user') 

@user.route('/profile/<username>/')
def profile(username):
    return render_template('user/profile.html', username=username)

@user.route('/timeline/<username>/')
def timeline(username):
    return render_template('user/timeline.html', username=username)

@user.route('/friends/<username>/')
def friends(username):
    return render_template('user/friends.html', username=username)