from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 


class Email:
    def __init__(self, data):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    # ---------- Select all emails -----------
    @classmethod
    def select_all_emails(cls):
        query = "SELECT * FROM emails"
        return connectToMySQL('email_validation_schema').query_db(query)


    # ---------- Select recent emails -----------
    @classmethod
    def select_recent_email(cls):
        query = "SELECT * FROM emails ORDER BY id DESC LIMIT 1"
        return connectToMySQL('email_validation_schema').query_db(query)


    # ---------- Insert New Email -----------
    @classmethod
    def insert_new_email(cls, data):
        query = "INSERT INTO emails (email, created_at, updated_at) VALUES ( %(email)s, NOW(), NOW());"
        return connectToMySQL('email_validation_schema').query_db(query, data)

    # ---------- Email Validation -----------
    @staticmethod
    def email_valid(data):
        is_valid = True
        if not EMAIL_REGEX.match(data['email']):
            flash("Invalid email address!")
            is_valid = False
        return is_valid