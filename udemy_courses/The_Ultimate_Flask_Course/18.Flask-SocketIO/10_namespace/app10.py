# pip install flask-socketio
# pip install eventlet 
# (or geventlet)

# socketio is haw you write the code and eventlet is how the message are sent.

# ______________________________________________________________________


# https://socket.io/
# https://cdnjs.com/libraries/socket.io

# https://flask-socketio.readthedocs.io/en/latest/ 

# https://code.jquery.com/

# ______________________________________________________________________

from flask import Flask, render_template, request
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

# ______________________________________________________________________
'''
# (A) This decorator receives the message from the JS/client (connecting
# message) and pass it to the function. (B) Then it printed it in the
# conssol. (C) After it send a message back to the client.
@socketio.on('message') #<-(A)
def receive_message(message):
    print('#####: {}'.format(message)) #<-(B)
    send('This is a message from Flask.') #<-(C)


# (A) This decorator receives the emit message from the JS/client that is send
# when it connect as well message and pass it to the function. (B) The function
# prints it in the conssol. (CC) And emits an other message back to the client.
@socketio.on('custom event') #<-(A)
def receive_custom_event(message):
    # print('THE CUSTOM MESSAGE IS: {}'.format(message)) #<-(B)
    print('THE CUSTOM MESSAGE IS: {}'.format(message['name'])) #<-(B)
    # emit('from flask', 'This is a custom evet from Flask!') #<-(CC)
    emit('from flask', {'extension' : 'Flask-SocketIO'},json=True) #<-(CC)

'''
# ______________________________________________________________________

@app.route('/originate', methods=['POST', 'GET'])
def originate():

    if request.method == 'POST':
        server_message = request.form['text_area']
        socketio.emit('server_originated', server_message)
        print('##### {}'.format(server_message))

    return render_template('originate.html')

# ______________________________________________________________________

# Here we have separated 

@socketio.on('message from user')
def broadcast(message):
    print('BROADCAST: ', message)
    emit('forward from flask', message.upper(), broadcast=True)


@socketio.on('message from user', namespace='/messages')
def messages(message):
    print('USER MESSAGES: ', message)
    emit('forward from flask', message.upper(), broadcast=True , namespace='/')

    # Note:  in the emit we has reset our namespace to default, so it can be
    # picked up in javascript with the original function: scoket.on(... else we
    # would need to change or make a new function with scoket_messages(... 

@socketio.on('message from user', namespace='/notifications')
def notifications(message):
    print('USER NOTIFICATION: ', message)
    emit('forward from flask', message.upper(), broadcast=True, namespace='/')
# ______________________________________________________________________

if __name__ == '__main__':
    socketio.run(app)
