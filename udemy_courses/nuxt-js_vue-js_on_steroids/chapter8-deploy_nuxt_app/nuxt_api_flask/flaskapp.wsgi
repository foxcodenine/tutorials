#!/usr/bin/python3.8
activate_this = '/home/ubuntu/.local/share/virtualenvs/nuxt_api_flask-gPgGeqg6/bin/activate_this.py'

with open(activate_this) as file_:
    exec(file_.read(), dict(__file__=activate_this))
import sys
import logging

import os
from dotenv import load_dotenv
project_folder = os.path.expanduser('/var/www/nuxt_api_flask')
load_dotenv(os.path.join(project_folder, '.env'))


logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/nuxt_api_flask/")

from run import app as application
# application.secret_key = os.environ.get('SECRET_KEY')
