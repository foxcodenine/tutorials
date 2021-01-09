from uuid import uuid4

UPLOADED_PHOTOS_DEST = 'images'  # <-
SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://admin:admin@localhost/trendy'
SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY =  uuid4().hex
DEBUG = False
WTF_CSRF_ENABLED = True


# PRESERVE_CONTEXT_ON_EXCEPTION = True
# CSRF_ENABLED = True
# CSRF_SESSION_KEY = "secret_crsf"

class config():
    my_bucket = 'foxhost9'
    region = 'eu-central-1'
