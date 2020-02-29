 # pip install flask 
# pip install flask-sqlalchamey
# pip install flask-pymysql
# pip install flask-migrate
# pip install flask-script
# pip install flask-wtf
# pip install flask-uploads
# pip install flask-login
# pip3 install Werkzeug==0.15.5

# pip install cryptography <- for error: 
# “cryptography is required for sha256_password or caching_sha2_password”
# ______________________________________________________________________

# https://jinja.palletsprojects.com/en/2.11.x/templates/?highlight=length#length

# ______________________________________________________________________

from flask import Flask, render_template, redirect, request, url_for, abort
from uuid import uuid4

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand 
from flask_script import Manager

from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, IntegerField, BooleanField, TextAreaField
from wtforms.validators import InputRequired, Length
from flask_wtf.file import FileAllowed, FileField

from flask_uploads import UploadSet, configure_uploads, IMAGES

from werkzeug.security import generate_password_hash, check_password_hash

from flask_login import LoginManager, UserMixin, login_required, login_user,  logout_user, current_user

from datetime import datetime

from my_datetime_cal import how_long_since

# ______________________________________________________________________

app = Flask(__name__)

photos = UploadSet('photos', IMAGES)

# ...._PHOTOS_... is dynamic it should be set as tha name of the variable above
# 'images' is the destination folder 
app.config['UPLOADED_PHOTOS_DEST'] = 'images'
app.config['DEBUG'] = True 
app.config['SECRET_KEY'] = uuid4().hex
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:ayanami9@localhost/twitter_clone_engage'

# app.config['MAX_CONTENT_LENGTH'] = 1 * 960 * 960
# ______________________________________________________________________

# setup flask-login 
login_manager = LoginManager(app)
login_manager.login_view = 'login' # <- this  redirect to 'login' if @login_required fails.

# setup sqlalchemy db
db = SQLAlchemy(app)

# setup flask-uploads
configure_uploads(app, photos)

# setup flask_migrate
migrate = Migrate(app, db)

# setup flask_script
manager = Manager(app)
manager.add_command('db', MigrateCommand)
# ______________________________________________________________________
class Followers(db.Model):
    __tablename__ = 'followers'
    id = db.Column(db.Integer, primary_key=True)
    follower = db.Column(db.Integer,db.ForeignKey('users.id'))
    followee = db.Column(db.Integer,db.ForeignKey('users.id'))

# the user table is used with flask-login so it need to inherit from UserMixin
class Users(UserMixin, db.Model):
    __tablename__ = 'users' 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    username = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(255))
    image = db.Column(db.String(100))
    join_date = db.Column(db.DateTime())

    tweet_posts = db.relationship('Tweets', backref='user', lazy='dynamic')

    # Note on the relationship column:

    # the tweet_posts colune is used to access 'tweets' table data by
    #  Users.tweet_posts.. querys.

    # the 'Tweets' is connecting the user to tweets table.

    # the backref='user' is used to access Users table data by Tweeds.user.. querys.

    # the 'Tweets' in the User table is like stating the right table in 
    # the join in mysql.

    following = db.relationship('Followers', 
            primaryjoin=(Followers.followee == id),
            # secondaryjoin=(Followers.followee == id),
            backref=('following'),
            lazy='dynamic')

    followed_by = db.relationship('Followers', 
        primaryjoin=(Followers.follower == id),
        # secondaryjoin=(Followers.follower == id),
        backref=('followed_by'),
        lazy='dynamic')



    

# ______________________________________

# This decorator  spessify that the following function is used by
#       flask_login to connect to an actual user when a user is loged in.
# It will set the current_user with the logged user.
# In this dec the user_loader reload the user object from the user ID 
#       stored in the session that is user_id.
@login_manager.user_loader
def load_user(user_id):
    return Users.query.get(int(user_id))
    # return User.query.filter_by(id=int(user_id)) <- you can use this 
                                                    # instaed of above
# ______________________________________

class Tweets(db.Model):
    __tablename__ = 'tweets'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    text = db.Column(db.String(250))
    date_created = db.Column(db.DateTime())

# ______________________________________




# ______________________________________________________________________
# Createing the wtf forms:

class RegisterForm(FlaskForm):
    name = StringField('Full name', validators=[
            InputRequired('Full name is required!'), 
            Length(max=100, message='Full name cannot exceed 100 characters!')])
    username = StringField('Username', validators=[
            InputRequired('Username is required!'),
            Length(max=50, message='Username cannot exceed 50 characters!')])
    password = PasswordField('Password', validators=[
            InputRequired('Password is required!'),
            Length(max=50, min=8, 
            message='Password should be between 8 to 50 characters long!')])
    image = FileField(validators=[
            FileAllowed(IMAGES, message='Only image files are allowed!'), 
            InputRequired('Profile image is required!')])

class LoginForm(FlaskForm):
    username = StringField('Username', validators=[InputRequired('Username is required!')])
    password = PasswordField('Password', validators=[InputRequired('Password is required!')])
    remember = BooleanField('Remember me')

class TweetForm(FlaskForm):    
    text = TextAreaField('Message', validators=[InputRequired(message='Blank message!')])


# ______________________________________________________________________
# Routes


@app.route('/')
def index():
    form = LoginForm()

    return render_template('index.html',form=form)

# ______________________________________

@app.route('/login', methods=['POST', 'GET'])
def login():
    form = LoginForm() 

    if request.method == 'GET':        
        return render_template('index.html', form=form)

    

    if form.validate_on_submit():

        loged_user = Users.query.filter_by(username=form.username.data).first()

        if not loged_user:
            return render_template('index.html', form=form, username_message='User does not exist!')

        if check_password_hash(loged_user.password, form.password.data):
            login_user(loged_user, remember=form.remember.data)
            return redirect(url_for('profile'))
        
        return render_template('index.html', form=form, password_message='Password does not match!')
    
    return render_template('index.html',form=form)


# ______________________________________
@app.route('/profile', defaults={'profile_user' : None})
@app.route('/profile/<profile_user>')
@login_required
def profile(profile_user):
    
    

    if profile_user:
        query_user = Users.query.filter_by(username=profile_user).first()   

        if not query_user:
            abort(400)

        follow_unfollow = Followers.query.filter_by(
            follower=current_user.id).filter_by(
            followee=query_user.id).first()   

        if follow_unfollow:
            # removing follow_link from own account.
            if current_user.id == query_user.id:
                follow_link = None
            # setting follow_link from to UNFOLLOW.
            else:
                follow_link = 'remove'
        
        else:
            # removing follow_link from own account.
            if current_user.id == query_user.id:
                follow_link = None            
            else:
                # setting follow_link from to FOLLOW.
                follow_link = 'add'

       

    else:
        # when you use @login_required automatically you have access to current_user
        query_user = current_user
        # removing follow link from own account
        follow_link = None
    
    

    tweets =  Tweets.query.filter_by(user=query_user).order_by(Tweets.id.desc()).all()



    following = Followers.query.filter_by(follower=query_user.id).all()
    followed_by = Followers.query.filter_by(followee=query_user.id).all() 


    print('\n<>following<>')
    for follower in following: print(follower.following.username)
    print('\n<>followed_by<>')
    for follower in followed_by: print(follower.followed_by.username)


    return render_template('profile.html', current_user=query_user, tweets=tweets, followed_by=followed_by, follow_link=follow_link)

# ______________________________________

@app.route('/register', methods=['POST', 'GET'])
def register():
    
    form = RegisterForm()
    
    if form.validate_on_submit():
        image_filaname  = photos.save(form.image.data)
        image_url = photos.url(image_filaname)

        new_user = Users(
                        name=form.name.data, 
                        username=form.username.data, 
                        password=generate_password_hash(form.password.data), 
                        image=image_url,
                        join_date=datetime.now())
        db.session.add(new_user)
        db.session.commit()

        # return "<h1>name: {}<br>username: {}<br>password: {}<br>image url: {}</h1>".format(
        #     form.name.data, form.username.data, form.password.data, image_url)

        
        login_user(
            Users.query.filter_by(username=form.username.data).first()
        ) # <- set user to logged after register 

        return redirect(url_for('profile'))

    return render_template('register.html', form = form)

# ______________________________________

# Below if a template_filter it is used to pass a function 
# (in this case 'time_since()') to the html template

@app.template_filter('time_since')
def time_since(my_datetime):
    ''' this filter/function is passing its parramiter 'time_since' to 
        our custom function 'how_long_since' and returning its result'''
    return how_long_since(my_datetime)
# ______________________________________

@app.route('/timeline', defaults={'timeline_user':None})
@app.route('/timeline/<timeline_user>', methods=['GET'])
@login_required
def timeline(timeline_user):
    form = TweetForm()

    if timeline_user:
        query_user = Users.query.filter_by(username=timeline_user).first()
        if not query_user:
            abort(404)
        user_id = query_user.id        
 

    else:
        query_user = current_user
        user_id = current_user.id
    #____________ 


    # Setting Tweets:
    if query_user == current_user:        

        current_user_following = Followers.query.filter_by(follower=current_user.id).all()

        following_tweets_dict={}
        following_tweets_list=[]

        for followers_row in current_user_following:
            tweets_of_one_followee = followers_row.following.tweet_posts.all()
            for tweet in tweets_of_one_followee: 
                following_tweets_dict.update({tweet.id : tweet})
        
        for key, value in following_tweets_dict.items():
            following_tweets_list.append(value)

        following_tweets_list.reverse()
        tweets = following_tweets_list
    #____________ 
        

    else:   
        tweets = Tweets.query.filter_by(user_id=user_id).order_by(Tweets.id.desc()).all()

    total_tweets = len(tweets)
    #____________ 


 
    return render_template('timeline.html', current_user=query_user, form=form, tweets=tweets, total_tweets=total_tweets)

# ______________________________________

@app.route('/post_tweet', methods=['POST'])
@login_required
def post_tweet():
    form = TweetForm()

    if form.validate():
        new_tweet = Tweets(user_id=current_user.id, text=form.text.data, date_created=datetime.now())
        db.session.add(new_tweet)
        db.session.commit()
     

    return redirect(url_for('timeline'))
# ______________________________________

@app.route('/follow/<username>')
@login_required
def follow(username):

    
    check_if_un_exist = Users.query.filter_by(username=username).first()
    if not check_if_un_exist:
        return redirect(url_for('profile'))
    # ____


    # ____
    user_to_follow = Users.query.filter_by(username=username).first()
    # ____


    # ____
    check = Followers.query.filter_by(follower=current_user.id).filter_by(followee=user_to_follow.id).first()
    if check:
        db.session.delete(check)

    else:
        new_follow = Followers(follower=current_user.id, followee=user_to_follow.id)
        db.session.add(new_follow)

    db.session.commit()
       


    return redirect(url_for('profile'))

# ______________________________________

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))



# ______________________________________________________________________

if __name__ == '__main__':
    manager.run()


# to start app in comandline:
# python .\app.py runserver



# to start migrate:
# python app.py db init
# python app.py db migrate
# python app.py db upgrade
# python app.py db downgrade


# versions:
# .\20.Engage!-A-Twitter-Clone\migrations\versions\55fcbf9329c6_.py
# b898a0fea851_.py
# 7a3f8376b8aa_.py
# de17cb1a7f89_.py  <- migrate was droping table i only need it to rename
                    # i used           op.rename_table('tweeds','tweets')
                    # https://programtalk.com/python-examples/alembic.op.rename_table/
# 4f7f1eb695fb_.py

# lost db had to restart from here:
# 0ff8de35aad3_.py
# 86a5d4c4792a_.py
# cba06fd2cba1_.py
# e2282d9d0a56_.py



'''
test users:

Joelle Miller
runner
aaaa1234

Chris Farrugia
foxcode
aaaa1234

James Gauci
eyetech
aaaa1234
'''