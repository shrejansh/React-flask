import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_mail import Mail

app= Flask(__name__)
app.config['SECRET_KEY']= 'f315c2c944354e40c9e6eb943684acdd'
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///site.db' #setting location of database
db=SQLAlchemy(app)
bcrypt=Bcrypt(app)
login_manager=LoginManager(app)
login_manager.login_view='login'
login_manager.login_message_category='info'
app.config['MAIL_SERVER']='smtp.mailtrap.io'
app.config['MAIL_PORT'] = 2525
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = '491402ee215d6a'
app.config['MAIL_PASSWORD'] = '3e6ae52e02929b'
# app.config['MAIL_USERNAME'] = os.environ.get('USERNAME')
# app.config['MAIL_PASSWORD'] = os.environ.get('PASSWORD')
mail = Mail(app)


from flaskblog import routes