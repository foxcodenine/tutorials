from my_app import db

class NuxtApiPosts(db.Model):
    __tablename__ = 'nuxt_api_post'
    
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    author = db.Column(db.String(50), nullable=False)
    sample_text = db.Column(db.Text, nullable=False)
    thumbnail = db.Column(db.Text, nullable=False)

    def __init__(self, title, author, sample_text, thumbnail):
        self.title = title
        self.author = author 
        self.sample_text = sample_text 
        self.thumbnail = thumbnail
    
    def __repr__(self):
        return f'<Post id: {self.id}>'

