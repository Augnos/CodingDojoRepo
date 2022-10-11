from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
NAME_REGEX = re.compile(r'^[a-zA-Z]+$') 


class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    # ---------- Select Loggedin User -----------
    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL("login_and_registration").query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])


    # # ---------- Select Most Recent User -----------
    # @classmethod
    # def select_recent_user(cls):
    #     query = "SELECT * FROM users ORDER BY id DESC LIMIT 1;"
    #     results = connectToMySQL('login_and_registration').query_db(query)
    #     users = []
    #     for user in results:
    #         users.append(cls(user))
    #     return users


    # ---------- Insert New User -----------
    @classmethod
    def insert_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, NOW() ,NOW());"
        flash("Account registered. Login to continue.")
        return connectToMySQL('login_and_registration').query_db(query, data)


    # # ---------- Update User -----------
    # @classmethod
    # def update_user(cls, data):
    #     query = "UPDATE users SET updated_at = NOW() WHERE id = %(id)s;"
    #     return connectToMySQL('login_and_registration').query_db(query, data)


    # # ---------- Delete User -----------
    # @classmethod
    # def delete_user(cls, data):
    #     query = "DELETE FROM users WHERE id = %(id)s;"
    #     return connectToMySQL('login_and_registration').query_db(query, data)


    # ---------- Registration Validation -----------
    @staticmethod
    def reg_validation(registration):
        is_valid = True

        if len(registration["first_name"]) < 2:
            is_valid = False
            flash("First name must be at least 2 characters.")

        if not NAME_REGEX.match(registration['first_name']):
            is_valid = False
            flash("First name must only contain characters A-Z.")

        if len(registration["last_name"]) < 2:
            is_valid = False
            flash("Last name must be letters only, at least 2 characters.")

        if not NAME_REGEX.match(registration['last_name']):
            is_valid = False
            flash("Last name must only contain characters A-Z.")

        query = "SELECT email FROM users WHERE email = %(email)s;"
        if connectToMySQL('login_and_registration').query_db(query, registration):
            is_valid = False
            flash("An account with this email was already created. Login to continue.")

        if not EMAIL_REGEX.match(registration['email']):
            is_valid = False
            flash("Invalid email address.")

        if len(registration["password"] or registration["confirm_password"]) < 8:
            is_valid = False
            flash("Password must be at least 8 characters.")

        if registration["confirm_password"] != registration["password"]:
            is_valid = False
            flash("Passwords do not match.")

        return is_valid


    # ---------- Login Validation -----------
    @staticmethod
    def login_validation(login):

        if not EMAIL_REGEX.match(login['email']):
            flash("Invalid login email format.")
            print("Invalid email.")
            return False

        if not login["password"]:
            flash("Login password cannot be empty.")
            print("Empty login.")
            return False

        query = "SELECT email FROM users WHERE email = %(email)s;"
        if not connectToMySQL('login_and_registration').query_db(query, login):
            flash("This email doesn't seem to be registered. Try another email or create an account.")
            print("Unregistered email.")
            return False

        query = "SELECT password FROM users WHERE email = %(email)s;"
        user_in_db = connectToMySQL('login_and_registration').query_db(query, login)
        if not bcrypt.check_password_hash(user_in_db.password, login["password"]):
            flash("Incorrect password. Try again.")
            print("Incorrect password.")
            is_valid = False