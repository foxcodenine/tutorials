from uuid import uuid4

class config():
    my_bucket = 'foxhost9'
    region = 'eu-central-1'
    mysql_db = 'mysql+pymysql://admin:admin@localhost/trendy'
    sercret_key = uuid4().hex