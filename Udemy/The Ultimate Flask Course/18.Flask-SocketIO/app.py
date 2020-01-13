# pip install flask-socketio
# pip install eventlet 
# (or geventlet)

# socketio is haw you write the code and eventlet is how the message are sent.

# ______________________________________________________________________


# https://socket.io/
# https://cdnjs.com/libraries/socket.io

# https://flask-socketio.readthedocs.io/en/latest/

# ______________________________________________________________________

from flask import Flask, render_template
from flask_socketio import SocketIO , send, emit

# ______________________________________________________________________

app = Flask(__name__)

app.config['SECRET_KEY'] = 'This_is_a_secret'
app.config['DEBUG'] = True 


socketio = SocketIO(app)
# ______________________________________________________________________

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('message')
def receive_message(message):
    print('#####: {}'.format(message))
    send('This is a message from Flask.')

@socketio.on('custom event')
def receive_custom_event(message):
    # print('THE CUSTOM MESSAGE IS: {}'.format(message))
    print('THE CUSTOM MESSAGE IS: {}'.format(message['name']))
    # emit('from flask', 'This is a custom evet from Flask!')
    emit('from flask', {'extension' : 'Flask-SocketIO'},json=True)
# ______________________________________________________________________

if __name__ == '__main__':
    socketio.run(app)
