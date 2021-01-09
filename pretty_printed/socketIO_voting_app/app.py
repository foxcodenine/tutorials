from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_socketio import SocketIO, emit

# ______________________________________________________________________

app = Flask(__name__) 
app.config['SECRET_KEY'] = 'mysecret' 
app.config['DEBUG'] =  True 
socketio = SocketIO(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://F2udETTsO6:U7hQzPXXBW@remotemysql.com:3306/F2udETTsO6'
db = SQLAlchemy(app)

# ______________________________________________________________________


class PollResults(db.Model):
    __tablename__ = 'pollresults' 
    id = db.Column('id', db.Integer, primary_key=True)
    vote = db.Column('data', db.Integer)

@app.route('/')
def index():
    return render_template('index.html')


@socketio.on('vote')
def handleVote(ballot):
    vote = PollResults(vote=ballot)
    db.session.add(vote)
    db.session.commit()

    results1 = PollResults.query.filter_by(vote=1).count() 
    results2 = PollResults.query.filter_by(vote=2).count() 

    emit('vote_results', {'results1': results1, 'results2': results2}, broadcast=True)



# ______________________________________________________________________


if __name__ == '__main__':
    socketio.run(app)