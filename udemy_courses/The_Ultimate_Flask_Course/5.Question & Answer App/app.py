from flask import Flask, render_template, url_for, g, request, session, redirect
from database import connect_db, get_db
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.exceptions import BadRequestKeyError

import os

app = Flask(__name__) 

app.config['DEBUG'] = True
app.config['SECRET_KEY'] = os.urandom(24)

# ______________________________________________________________________
# flask functions:

@app.teardown_appcontext 
def close_db(error):
	if hasattr(g, 'sqlite_db'):
		g.sqlite_db.close()

# ________________________________________		

def get_current_user():
	user_results = None 

	if 'user' in session:
		user = session['user']
		
		db = get_db()
		user_cur = db.execute("SELECT * FROM users WHERE name = ?", [user])
		user_results = user_cur.fetchone()

	return user_results
# ______________________________________________________________________
# native bar action:

# ______________________________________________________________________
# flask routes:

@app.route('/')
def index():
	user = get_current_user()
	db = get_db() 

	questions_cur = db.execute(
		"""SELECT question.question_text, question.id AS question_id,
				  askers.name AS asker, experts.name AS expert
				  FROM question
				  JOIN users AS askers ON askers.id=question.asked_by_id 
				  JOIN users AS experts ON experts.id=question.expert_id
				  WHERE question.answer_text IS NOT NULL""")
	questions_result = questions_cur.fetchall()
		

	return render_template('home.html', user=user, active='home', questions=questions_result)

# ________________________________________

@app.route('/register', methods=['GET', 'POST'])
def register():
	user = get_current_user()
	if user:
		return redirect(url_for('index'))

	if request.method == 'POST':
		db = get_db()

		register_user_cur = db.execute("SELECT id FROM users WHERE name=?", [request.form['name']])
		register_user = register_user_cur.fetchone()

		if register_user:
			return render_template('register.html', user=user, error='Username already exists')

		hashed_password = generate_password_hash(request.form['password'], method='sha256')
		db.execute("""
		INSERT INTO users (name, password, expert, admin)
		VALUES(?, ?, ?, ?)""", [request.form['name'], hashed_password, '0', '0']
		)
		db.commit()

		session['user'] = request.form['name']

		return redirect(url_for('index'))
		
	return render_template('register.html',active='register', user=user)

# ________________________________________

@app.route('/login', methods=['POST', 'GET'])
def login():
	user = get_current_user()
	if user:
		return redirect(url_for('index'))

	db = get_db()

	if request.method == 'POST':

		name = request.form['name']
		password = request.form['password']			

		user_cur = db.execute(
			"""SELECT id, name, password FROM users
			   WHERE name = ?""", [name])

		user_results = user_cur.fetchone() 

		if not user_results:
			return render_template('login.html', user=user, active='login', invalid_user='Username does not exist') 

			
		if check_password_hash(user_results['password'], password):
			session['user'] = user_results['name']
			return redirect(url_for('index')) 
		else:
			return render_template('login.html', user=user, active='login', invalid_password='Invalid password')

	return render_template('login.html',active='login' , user=user)

# ________________________________________


@app.route('/question/<question_id>')
def question(question_id):
	user = get_current_user()	
	db = get_db()
	question_cur = db.execute(
		"""SELECT question.question_text, question.answer_text,
				  askers.name AS asker, experts.name AS expert
				  FROM question
				  JOIN users AS askers ON askers.id=question.asked_by_id 
				  JOIN users AS experts ON experts.id=question.expert_id
				  WHERE question.id=?""",[question_id])
	question_result = question_cur.fetchone()
	return render_template('question.html', active='question', user=user, question=question_result)

# ________________________________________

@app.route('/answer/<question_id>', methods=['POST', 'GET'])
def answer(question_id):
	user = get_current_user()
	if not user:
		return redirect(url_for('login'))
	if user['expert'] == 0:
		return redirect(url_for('index'))
	
	db = get_db()

	
	question_cur = db.execute("SELECT * FROM question WHERE id=?",[question_id])
	question_result = question_cur.fetchone()

	if request.method == 'POST':
		db.execute(
	'UPDATE question SET answer_text= ? WHERE id= ?',[request.form["text_area_answer"], question_id]
		)
		db.commit()

		return redirect(url_for('unanswered'))


	return render_template('answer.html', question=question_result, user=user, active='answer')

# ________________________________________

@app.route('/ask', methods=['POST', 'GET'])
def ask():
	user = get_current_user()
	if not user:
		return redirect(url_for('login'))

	db = get_db() 

	if request.method == 'POST':
		db.execute(
			"""INSERT INTO question (question_text, asked_by_id, expert_id)
			   VALUES (?,?,?)""",[request.form['question'], user['id'], request.form['expert']]
		)
		db.commit()

		return redirect(url_for('index'))

	
	experts_cur = db.execute("SELECT id, name FROM users WHERE expert = 1")
	experts_result = experts_cur.fetchall()

	return render_template('ask.html', user=user, experts=experts_result, active='ask' )

# ________________________________________

@app.route('/unanswered')
def unanswered():
	user = get_current_user()
	if not user:
		return redirect(url_for('login'))
	if user['expert'] == 0:
		return redirect(url_for('index'))

	db = get_db()
	question_cur = db.execute(
		 """SELECT question.id, question.question_text, users.name 
			FROM question 
			JOIN users ON question.asked_by_id=users.id 
			WHERE question.answer_text is NULL AND question.expert_id=?""", [user['id']])

	question_result = question_cur.fetchall()
	return render_template('unanswered.html', user=user, questions=question_result, active='unanswered')

# ________________________________________

@app.route('/users')
def users():
	user = get_current_user()
	if not user:
		return redirect(url_for('login'))

	if user['admin'] == 0:
		return redirect(url_for('index'))
	
	db = get_db() 
	users_cur = db.execute("SELECT id, name, expert, admin FROM users;")
	users_results = users_cur.fetchall()

	return render_template('users.html', user=user, users=users_results, active='users')
# ________________________________________

@app.route('/promote/<user_id>')
def promote(user_id):
	user = get_current_user()
	if not user:
		return redirect(url_for('login'))

	if user['admin'] == 0:
		return redirect(url_for('index'))

	db = get_db()

	expert_cur = db.execute("SELECT id, name, expert, admin FROM users WHERE id=?",[user_id])
	expert_result = expert_cur.fetchone()

	if expert_result['expert'] == 0:
		db.execute("UPDATE users SET expert=1 where id=?", [user_id])
		db.commit()

	else:
		db.execute("UPDATE users SET expert=0 where id=?", [user_id])
		db.commit()

	return redirect(url_for('users'))

# ________________________________________

@app.route('/logout')
def logout():
	
	session.pop('user', None)
	return redirect(url_for('index'))

# ________________________________________

@app.route('/delete', methods=['POST', 'GET'])
def delete():
	user = get_current_user()
	if not user:
		return redirect(url_for('login'))

	if user['admin'] == 0:
		return redirect(url_for('index'))
	
	db = get_db() 
	users_cur = db.execute("SELECT id, name, expert, admin FROM users;")
	users_results = users_cur.fetchall()



	if request.method == 'POST':

		list_of_user_id = []
		for id in users_results:
			list_of_user_id.append(id['id'])

		delete_list = []
		for id in list_of_user_id:
			try:
				a = request.form[str(id)] 
				delete_list.append(a)
			except BadRequestKeyError:
				pass

		for u in delete_list:

			db.execute("DELETE FROM users WHERE id=?", [u])
			db.commit()

		return redirect(url_for('delete'))


	return render_template('delete.html', user=user, users=users_results, active='delete')

# ______________________________________________________________________

@app.route('/remove', methods=['POST', 'GET'])
def remove():
	user = get_current_user()
	if not user:
		return redirect(url_for('login'))

	if user['admin'] == 0:
		return redirect(url_for('index'))

	db = get_db() 
	
	questions_cur = db.execute(
		"""SELECT question.question_text,question.answer_text ,question.id AS question_id,
				  askers.name AS asker, experts.name AS expert
				  FROM question
				  JOIN users AS askers ON askers.id=question.asked_by_id 
				  JOIN users AS experts ON experts.id=question.expert_id
				  """)
	questions_result = questions_cur.fetchall()



	if request.method == 'POST':

		list_of_questions_id = []
		for id in questions_result:
			list_of_questions_id.append(id['question_id'])

		delete_list = []
		for id in list_of_questions_id:
			try:
				a = request.form[str(id)] 
				delete_list.append(a)
			except BadRequestKeyError:
				pass

		for u in delete_list:

			db.execute("DELETE FROM question WHERE id=?", [u])
			db.commit()

		return redirect(url_for('remove'))


	return render_template('remove.html', user=user, questions=questions_result, active='remove')





# ______________________________________________________________________
if __name__ == '__main__':
	app.run()