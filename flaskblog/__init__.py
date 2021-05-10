from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app= Flask(__name__)
app.config['SECRET_KEY']= 'f315c2c944354e40c9e6eb943684acdd'
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///site.db' #setting location of database
db=SQLAlchemy(app)

from flaskblog import routes