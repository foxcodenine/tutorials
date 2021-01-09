#!/usr/bin/python3.8
activate_this = '/home/ubuntu/.local/share/virtualenvs/trendy-TkTqI5qg/bin/activate_this.py'
with open(activate_this) as file_:
    exec(file_.read(), dict(__file__=activate_this))
import sys
import logging
from uuid import uuid4
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/trendy/")

from app import app as application
#application.secret_key = '34qtGQ#T$tWEet#$reasgEWRdsfGSge'
application.secret_key = uuid4().hex
