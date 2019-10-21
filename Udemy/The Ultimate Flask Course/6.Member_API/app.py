from flask import Flask, g, request, jsonify
import sqlite3

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

@app.route('/member', methods=['GET'])
def get_members():

    db = get_db()
    members_cur = db.execute("SELECT * FROM members")
    members_results = members_cur.fetchall()

    return_values = []

    for m in members_results:
        member = dict(m)
        return_values.append(member)

    return jsonify({'members' : return_values})



@app.route('/member/<int:member_id>', methods=['GET'])
def get_member(member_id):
    return 'This return one member by ID'


@app.route('/member', methods=['POST'])
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

    return jsonify(new_member)


@app.route('/member/<int:member_id>', methods=['PUT', 'PATCH'])
def edit_member(member_id):
    return 'This updates a member by ID.'


@app.route('/member/<int:member_id>', methods=['DELETE'])
def delete_member(member_id): 
    return 'This removes a member by ID.'
    
 
if __name__ == "__main__":
    app.run()