from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


class Model:
    def __init__(self, data):
        self.id = data['id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    # ---------- Select All Models -----------
    @classmethod
    def select_all_models(cls):
        query = "SELECT * FROM models;"
        results = connectToMySQL('schema').query_db(query)
        models = []
        for model in results:
            models.append(cls(model))
        return models


    # ---------- Select Most Recent Model -----------
    @classmethod
    def select_recent_model(cls):
        query = "SELECT * FROM models ORDER BY id DESC LIMIT 1;"
        results = connectToMySQL('schema').query_db(query)
        models = []
        for model in results:
            models.append(cls(model))
        return models


    # ---------- Insert New Model -----------
    @classmethod
    def insert_model(cls, data):
        query = "INSERT INTO models ( created_at, updated_at ) VALUES ( NOW() , NOW() );"
        return connectToMySQL('schema').query_db(query, data)


    # ---------- Update Model -----------
    @classmethod
    def update_model(cls, data):
        query = "UPDATE models SET updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('schema').query_db(query, data)


    # ---------- Delete Model -----------
    @classmethod
    def delete_model(cls, data):
        query = "DELETE FROM models WHERE id = %(id)s;"
        return connectToMySQL('schema').query_db(query, data)


    # ---------- Validation -----------
    @staticmethod
    def is_valid(survey):
        is_valid = True
        if survey == False:
            is_valid = False
            flash("Survey must be true!")
        return is_valid