from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)    # we are creating an object called bcrypt, 
                        # which is made by invoking the function Bcrypt with our app as an argument

import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 


class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    # # ---------- Select All Users -----------
    # @classmethod
    # def select_all_users(cls):
    #     query = "SELECT * FROM users;"
    #     results = connectToMySQL('login_and_registration').query_db(query)
    #     users = []
    #     for user in results:
    #         users.append(cls(user))
    #     return users


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
            flash("First name must be letters only, at least 2 characters.")
        
        if len(registration["last_name"]) < 2:
            is_valid = False
            flash("Last name must be letters only, at least 2 characters.")
        
        if not EMAIL_REGEX.match(registration['email']):
            flash("Invalid email address")
            is_valid = False
        
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
        is_valid = True
        
        if len(login.first_name) < 2:
            is_valid = False
            flash("First name must be letters only, at least 2 characters.")
        
        if len(login.last_name) < 2:
            is_valid = False
            flash("Last name must be letters only, at least 2 characters.")
        
        if not EMAIL_REGEX.match(login['email']):
            flash("Invalid email address")
            is_valid = False
        
        if len(login.password or login.confirm_password) < 8:
            is_valid = False
            flash("Password must be at least 8 characters.")
        
        if login.confirm_password != login.password:
            is_valid = False
            flash("Passwords do not match.")
        
        return is_valid