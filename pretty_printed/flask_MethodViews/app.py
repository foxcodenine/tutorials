from  flask  import Flask
from flask.views import MethodView

app = Flask(__name__)
# app.config['DEBUG'] = True

class Animal(MethodView):

    def get(self):
        return 'Returned an animal!'

    def post(self):
        return 'Create an animal!'

    def put(self):
        return 'Modified an animal!'

    def delete(self):
        return 'Deleted an animal!'

app.add_url_rule('/animal/',  view_func=Animal.as_view('animal'))


if __name__ == '__main__':
    app.run()