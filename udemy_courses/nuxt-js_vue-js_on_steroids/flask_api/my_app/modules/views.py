from flask import redirect, request, jsonify, Blueprint, url_for, flash, render_template, abort
from my_app import app, db
from my_app.modules.database import NuxtApiPosts


nuxtAPI = Blueprint('nuxtAPI', __name__, url_prefix='/nuxtAPI')

@nuxtAPI.route('/', methods=['POST', 'GET'])
def api():
    request_xhr_key = request.headers.get('API-Nuxt-Key')

    #____________________________________________________

    if request.method == 'POST':

        if request_xhr_key and request_xhr_key == '123#456#789':

            title = request.form.get('title')  
            author = request.form.get('author')      
            sample_text = request.form.get('sampleText')  
            thumbnail = request.form.get('thumbnail') 

            post = NuxtApiPosts(
                title = title,
                author = author,
                sample_text = sample_text,
                thumbnail = thumbnail
            )

            db.session.add(post)
            db.session.commit()
            
        else:
            return abort(401)

    #____________________________________________________

    api_data =[]
    db_data = NuxtApiPosts.query.all()

    for record in db_data:
        post = {
            'id': record.id,
            'title': record.title,
            'author': record.author,
            'sampleText': record.sample_text,
            'thumbnail': record.thumbnail
        }
        api_data.append(post)

    #____________________________________________________

    if request_xhr_key and request_xhr_key == '123#456#789':

        api_object = {
            'title': 'The Mandalorian'
        }
        return jsonify(api_data)


    #____________________________________________________

    # return jsonify(api_data)
    return abort(401)
    




'''
title: The Mandalorian 

author: Star Wars 

sampleText: After the stories of Jango and Boba Fett, another warrior emerges in the Star
Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence
of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the
galaxy far from the authority of the New Republic.

thumbnail:  






requests.post('http://127.0.0.1:5000/nuxtAPI/',
data={
'title': 'The Mandalorian', 
'author': 'Star Wars', 
'thumbnail': 'https://lumiere-a.akamaihd.net/v1/images/disney-mandalorian-gallery-hero-desktop_65f5959e.jpeg?region=0,0,2048,872&width=1200',
'sampleText': "sampleText: After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic."
})

requests.post('http://127.0.0.1:5000/nuxtAPI/',
data={
'title': 'Rogue One', 
'author': 'Gareth Edwards', 
'thumbnail': 'https://www.jedinews.com/wp-content/uploads/2019/06/rogue-one-line-up.jpg',
'sampleText': "From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure. In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire’s ultimate weapon of destruction."
},
headers={'API-Nuxt-Key': '123#456#789'})

'''
    