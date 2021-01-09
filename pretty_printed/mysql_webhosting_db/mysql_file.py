# in this example i am using https://www.freemysqlhosting.net 
# or
# https://remotemysql.com
# to host myslq database.

# ref:  https://dev.mysql.com/doc/connector-python/en/connector-python-connectargs.html


from flask import Flask 
import mysql.connector 

app = Flask(__name__)

app.config['DEBUG'] = True

web_db = mysql.connector.connect(
    host = 'remotemysql.com',
    user = 'F2udETTsO6',
    passwd = 'U7hQzPXXBW',
    db = 'F2udETTsO6',
    raise_on_warnings = True,
    port = 3306
)

def dict_cursor():
    return web_db.cursor(dictionary=True)
#_______________________________________________________________________

cur = dict_cursor()

# cur.execute("""CREATE TABLE cats(
#                     cat_id INT PRIMARY KEY AUTO_INCREMENT,
#                     name VARCHAR(30),
#                     breed VARCHAR(30),
#                     sex VARCHAR(30),
#                     months INT)""")

# cur.execute("DROP TABLE cats")


# cur.executemany("""

#     INSERT INTO cats (name, breed, sex, months) VALUES 
#     (%s, %s, %s, %s)""",[

#         ('Luna','persian','female',4),
#         ('Chloe','bengal','female',2),
#         ('Leo','munchkin','male',3),
#         ('Simba','siamese','male',1),
#         ('Bella','russian blue','female',2),
#         ('Lucye','tabby','female',6),
#         ('Loki','sphynx','male',8),
#         ('Sophie','tabby','female',2),
#         ('Max','russian blue','male',4),
#         ('Zoe','munchkin','female',4),
#         ('Nala','turkish','female',1),
#         ('Jack','munchkin','male',3),
#         ('Cleo','ragdoll','female',1),
#         ('Milo','toyger','male',6)
#     ])

web_db.commit()

cur.execute("SHOW TABLES")

for table in cur:
    print(table)

cur.execute("select * from cats")
results = cur.fetchall()
for row in results:
    print(row)

#_______________________________________________________________________
@app.route('/')
def index():
    return "<h2>Hi welcome to the Pet Shop</h2>"


@app.route('/cats/<int:cat_id>')
def cats(cat_id):
    cur = dict_cursor()
    cur.execute("SELECT * FROM cats WHERE cat_id=%s",[cat_id])
    results = cur.fetchone()

    return '<h3>id: {cat_id} - name: {name} - months: {months} - breed: {breed}</h3>'.format(**results)

#_______________________________________________________________________


if __name__ == '__main__':
           app.run()
