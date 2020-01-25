
from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit
from flask_sqlalchemy import SQLAlchemy
# ______________________________________________________________________

app = Flask(__name__)

app.config['SECRET_KEY'] = 'mysecret'
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chat_app.db'
socketio = SocketIO(app)

db = SQLAlchemy(app)

# ______________________________________________________________________


class ChatMessages(db.Model):
    '''Createing db table'''
    __tablename__ = "chat_messages"
    id = db.Column('id', db.Integer, primary_key=True)
    msg = db.Column('msg', db.String(255))


# ______________________________________________________________________


@socketio.on('myMessages')
def message(message):
    '''Socket to receive chat msg from client and add them to db'''
    print('###{}'.format(message))
    msg_to_add = ChatMessages(msg=message)
    db.session.add(msg_to_add)
    db.session.commit()
    emit('flask_msg', message, broadcast=True )

@app.route('/')
def index():
    '''Route to main page'''
 
    # messages = ChatMessages.query.all()
    messages = ChatMessages.query.order_by(ChatMessages.id.desc()).limit(20)
    order_messages =[]

    for m in messages:
        order_messages.append(m.msg)    
  
    order_messages.reverse()
    
    return render_template('index.html', messages=order_messages)

# ______________________________________________________________________


if __name__ == '__main__':
    socketio.run(app)



