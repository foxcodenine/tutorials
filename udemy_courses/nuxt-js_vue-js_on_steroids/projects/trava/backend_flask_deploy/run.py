import socket
if socket.gethostbyname(socket.gethostname() + ".local") == '192.168.0.10':
    activate_this = '/home/foxcodenine/.local/share/virtualenvs/backend_flask-ptmEJDHm/bin/activate_this.py'

    with open(activate_this) as file_:
        exec(file_.read(), dict(__file__=activate_this))

# ______________________________________________________________________

import os
from dotenv import load_dotenv

project_folder = os.path.expanduser(os.getcwd())
load_dotenv(os.path.join(project_folder, '.env'), override=True)

from my_app import app 


if __name__ == "__main__":    

    app.run(host='0.0.0.0', port=5560)