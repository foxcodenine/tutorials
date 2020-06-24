from flask import Flask, render_template, redirect, request, url_for, flash
from .routes import blue_view

app = Flask(__name__, instance_relative_config=True)

if app.config['ENV'] == 'development':
    app.config.from_object('config.DevelopmentConfig')
else:
    app.config.from_object('config.ProductionConfig')

app.register_blueprint(blue_view)


# ______________________________________________________________________

print('CHECK_CONFIG ', app.config['CHECK_ENV'])
# ______________________________________________________________________


# Logic in Jinja


# if statements
# {% if status == 1 %}{% endif %}
# {% if 'active' in status %}{% endif %}

# for loop

        # {% if nav %}
        # {% for link in nav %}
        # <a href="{{ link.url }}">{{ link.name }}</a>
        # {% endfor %}
        # {% else %}