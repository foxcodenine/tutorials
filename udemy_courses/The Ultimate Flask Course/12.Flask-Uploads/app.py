# pip install flask-uploads 

# https://pythonhosted.org/Flask-Uploads/
# ______________________________________________________________________

from flask import Flask, render_template, request
from flask_uploads import UploadSet, configure_uploads, IMAGES, DOCUMENTS, UploadNotAllowed


# ______________________________________________________________________
app = Flask(__name__) 

photos = UploadSet('photos', IMAGES)

# IMAGES if the file type we are uploading, 
# 'photos' is the name we are giveing, could be example: pictures, images, etc

docs = UploadSet('docs', DOCUMENTS)

app.config['DEBUG'] = True
app.config['UPLOADED_PHOTOS_DEST'] = 'pictures'



app.config['UPLOADED_PHOTOS_ALLOW'] = ['txt', 'pdf']  #<- allow additional file type
app.config['UPLOADED_PHOTOS_DENY'] = ['gif']  #<- to deny file type that already are listed 
# UPLOADED_AABBCC_DEST    is the same as     UploadSet('AABBCC', IMAGES)

app.config['UPLOADS_DEFAULT_DEST']= 'others'

configure_uploads(app, (photos, docs))

# you also can combine different file types in your set like this 
# myfiles = UploadSet('myfiles', IMAGES + TEXT + ('pdf', 'doc'))

# ______________________________________________________________________

@app.route('/uploads', methods=['GET', 'POST'])
def uploads():

    if request.method == 'POST' and 'thefile' in request.files:
        
        try:
            image_filename = photos.save(request.files['thefile'])
            # return '<h2>{}</h2>'.format(str(photos.path(image_filename)))
            return '<h2>{}</h2>'.format(str(photos.url(image_filename)))
        except UploadNotAllowed:
            error = 'File is not allowed!'
            return render_template('upload.html', error=error)

    return render_template('upload.html')



# ______________________________________________________________________

@app.route('/docs', methods=['GET', 'POST'])
def documents():

    if request.method == 'POST' and 'thefile' in request.files:
        
        try:
            doc_filename = docs.save(request.files['thefile'])
            # return '<h2>{}</h2>'.format(str(docs.path(image_filename)))
            return '<h2>{}</h2>'.format(str(docs.url(doc_filename)))
        except UploadNotAllowed:
            error = 'File is not allowed!'
            return render_template('docs.html', error=error)

    return render_template('docs.html')



# ______________________________________________________________________

if __name__ == '__main__':
    app.run()