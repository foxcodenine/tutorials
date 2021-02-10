#!/usr/bin/python3.9
activate_this = '/home/ubuntu/.local/share/virtualenvs/backend_flask_deploy-zmiKsYLa/bin/activate_this.py'

with open(activate_this) as file_:
    exec(file_.read(), dict(__file__=activate_this))

import sys
import logging
import os
from dotenv import load_dotenv

# project_folder = os.path.expanduser(os.getcwd())
project_folder = '/var/www/projects/001_trava/backend_flask_deploy'

load_dotenv(os.path.join(project_folder, '.env'), override=True)


logging.basicConfig(stream=sys.stderr)
sys.path.insert(0, '/var/www/projects/001_trava/backend_flask_deploy/')

from run import app as application
