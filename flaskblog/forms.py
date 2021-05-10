from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo
from email_validator import validate_email, EmailNotValidError


class  RegistrationForm(FlaskForm):
    username=StringField('username', validators=[DataRequired(), Length(min=2,max=20)])
    email=StringField('email', validators=[DataRequired()])
    password=PasswordField('Password',validators=[DataRequired()])
    confirm_password=PasswordField('Confirm password',validators=[DataRequired(),EqualTo('password')])
    submit=SubmitField('Sign up')

class  LoginForm(FlaskForm):
    
    email=StringField('email', validators=[DataRequired()])
    password=PasswordField('Password',validators=[DataRequired()])
    remember= BooleanField('Remember Me')
    submit=SubmitField('Login')