from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

app= Flask(__name__)
app.config['SECRET_KEY']= 'f315c2c944354e40c9e6eb943684acdd'
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///site.db' #setting location of database
db=SQLAlchemy(app)
bcrypt=Bcrypt(app)
login_manager=LoginManager(app)
login_manager.login_view='login'
login_manager.login_message_category='info'


from flaskblog import routes