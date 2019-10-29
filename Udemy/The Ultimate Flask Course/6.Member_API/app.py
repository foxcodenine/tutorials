from flask import Flask, g, request, jsonify
import sqlite3
from functools import wraps

app = Flask(__name__)

app.config['DEBUG'] = True
#_______________________________________________________________________


def connect_db():
    sql = sqlite3.connect('members.db')
    sql.row_factory = sqlite3.Row 
    return sql



def get_db():
    if not hasattr(g, 'sqlite_db'):
        g.sqlite_db = connect_db() 
    return g.sqlite_db


@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'sqlite_db'):
        g.sqlite_db.close()

#_______________________________________________________________________


api_username = 'admin'
api_password = 'password'

def protected(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        if auth   and   auth.username == api_username   and   auth.password == api_password:
            return f(*args, **kwargs)
        return jsonify({'message' : 'Authentication Failed!'}), 403 
    return decorated



#_______________________________________________________________________

@app.route('/member', methods=['GET'])
@protected
def get_members():

    db = get_db()
    members_cur = db.execute("SELECT * FROM members")
    members_results = members_cur.fetchall()

    return_values = []

    for m in members_results:
        member = dict(m)
        return_values.append(member)

    
    return jsonify({'members' : return_values})

    

# ________________________________________

@app.route('/member/<int:member_id>', methods=['GET'])
@protected
def get_member(member_id):

    db = get_db()
    member_cur = db.execute("SELECT * FROM members WHERE id=?", [member_id])
    member_result = member_cur.fetchone()

    member_result = dict(member_result)


    return jsonify({'member':  member_result})

# ________________________________________

@app.route('/member', methods=['POST'])
@protected
def add_member():
    
    
    new_member_data = request.get_json()

    name = new_member_data['name']
    email = new_member_data['email']
    level = new_member_data['level']

    db = get_db()
    db.execute("INSERT INTO members (name, email, level) VALUES (?,?,?)", [name, email, level])
    db.commit()

    member_cur = db.execute("SELECT * FROM members WHERE email=?", [email])
    new_member = member_cur.fetchone()
    new_member = dict(new_member)

    return jsonify({'member': new_member})

# ________________________________________

@app.route('/member/<int:member_id>', methods=['PUT', 'PATCH'])
@protected
def edit_member(member_id):

    new_member_data = request.get_json() 

    name = new_member_data['name']
    email = new_member_data['email']
    level = new_member_data['level']

    db = get_db()
    db.execute("UPDATE members SET name=?, email=?, level=? WHERE id=?", [name, email, level, member_id])
    db.commit

    member_cur = db.execute("SELECT * FROM members WHERE id=?", [member_id])
    member_result = member_cur.fetchone()

    member_result = dict(member_result)

    return jsonify({'member' : member_result})

# ________________________________________

@app.route('/member/<int:member_id>', methods=['DELETE'])
@protected
def delete_member(member_id): 

    db = get_db()
    db.execute("DELETE FROM members WHERE id=?",[member_id])
    db.commit()

    return jsonify({"message" : 'The member has been deleted!'})
    
#_______________________________________________________________________
 

if __name__ == "__main__":
    app.run()
