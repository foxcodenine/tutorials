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
from flask_socketio import SocketIO , send, emit,  join_room, leave_room, close_room, disconnect

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


@socketio.on('message from user')
def message_from_user(message):
    print('USER MESSAGE: ', message)
    emit('forward from flask', message.upper(), broadcast=True)

# ______________________________________________________________________

# session_id   &   send_private_message

# Here we are get the session_id  through request and appended with the username
# in a dictionery, normally this will be added to the database instead.

# users = [] # 
users = {}

@socketio.on('username', namespace='/private')
def receive_username(username):
    # users.append({username : request.sid})
    users[username] = request.sid
    print(users)
    print('## Username Added')


@socketio.on('private_message',namespace='/private')
def private_message(payload):
    recipient_session_id = users[payload['username']]
    message = payload['message']

    emit('new_private_message', message, room=recipient_session_id )



# 13. To_Join_a_Room
@socketio.on('join_room', namespace='/private')
def handle_join_room(room):
    join_room(room)
    emit('room_message','a new user has joined', room=room)

# 14. To_Leave_a_Room
@socketio.on('leave_the_room', namespace='/private')
def handle_leave_room(room):
    leave_room(room)
    emit('room_message', '..a user has left the room!', room=room)

# 15. To_Close_a_Room
@app.route('/close/<room>')
def handle_close_room(room):    
    close_room(room, namespace='private')
    return '<i>{}</i> room been closed!'.format(room)




# 16. Connect_and_Disconnect
@socketio.on('connect', namespace='/private')
def on_connect():
    print('<NEW_CONNECTION_ESTABLISHED!>')


@socketio.on('disconnect', namespace='/private')
def on_disconnect():
    print('<CONNECTION_ENDED!>')


@socketio.on('disconnect_me', namespace='/private')
def disconnect_me(msg):
    disconnect()
    print('~~~~~{}~~~~~'.format(msg))

# ______________________________________________________________________
# https://flask-and-redis.readthedocs.io/en/latest/
# ______________________________________________________________________

if __name__ == '__main__':
    socketio.run(app)
