## pipenv

Install pipenv: 

	$ pip install pipenv
	or to install it globally on ubuntu
	$ sudo pip install pipenv

Install Packages with pipenv in project dir:
	
	cd to project dir, to install numpy to project env run:

	$ pipenv install numpy 

It will create two files, Pipfile & Pipfile.lock

To activate project env run:

	$ pipenv shell
	
To deactivate run:

	$ exit

To run python in env run:

	$ pipenv run python

To run a script run:

	$ pipenv run python scriptfile.py

To install packages from a requirements file run:

	$ pipenv install -r .\requirements.txt



To display project dependences: 

	$ pipenv lock -r 
	or to write to file
	$ pipenv lock -r > dependences.txt

To install a package but not including it for production, example pytest:

	$ pipenv install pytest --dev

To uninstall a package example request:

	$ pipenv uninstall request

To run or change the python version on the project:

	go to Pipfile change the version exaple:

	python_version = "3.6"

	and run 
	$ pipenv --python 3.6

	so if you do $ pipenv run python 
	it will run in version 3.6.1 on now on

To remove the environment from pc run:

	$ pipenv --rm

	The pipfiles will not be deleted 

To recreate the environment:

	$ pipenv install


To console log the virtualenv path run:

	$ pipenv --venv

To check for security-vulnerability in your packages:

	$ pipenv check

To displays currently-installed dependency graph  information:

	$ pipenv graph

To update Pipfile.lock to latest version:

	$ pipenv lock

To install packages from Pipfile.lock (with versions):

	$ pipenv install --ignore-pipfile

To look at the python executable inside python:

	>>> import sys
	>>> sys.executable
	'C:\\Users\\Chris\\.virtualenvs\\pipenv_tutorial-i8AmbjTq\\Scripts\\python.exe'

## Set environment variables

In project dir create a .env file and inside write the environment variables:

	example in the .env file
		SECRET_KEY="this_is_a_secret!"

run python
	
	$ pipenv run python
	Loading .env envirment variable 
	Python 3.7. (v3.7.0:1b..............
	............
	...
to access the environment variables inside python:

	>>> import sys
	>>> os.environ['SECRET_KEY']
	'this_is_a_secret!'
	
	
