from flask_app.config.mysqlconnection import connectToMySQL


class Model:
    def __init__(self, data):
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # ---------- Get All Models-----------
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM models;"
        results = connectToMySQL('sql_schema').query_db(query)
        models = []
        for model in results:
            models.append(cls(model))
        return models

    # ---------- Get One Model-----------
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM models WHERE id = %(id)s;"
        results = connectToMySQL('sql_schema').query_db(query, data)
        models = []
        for model in results:
            models.append(cls(model))
        return models

    # ---------- Insert New Model-----------
    @classmethod
    def insert_new_model(cls, data):
        query = "INSERT INTO models ( created_at, updated_at ) VALUES ( NOW() , NOW() );"
        return connectToMySQL('sql_schema').query_db(query, data)

    # ---------- Update Model -----------
    @classmethod
    def update_model(cls, data):
        query = "UPDATE models SET updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('sql_schema').query_db(query, data)

    # ---------- Delete Model -----------
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM models WHERE id = %(id)s;"
        return connectToMySQL('sql_schema').query_db(query, data)