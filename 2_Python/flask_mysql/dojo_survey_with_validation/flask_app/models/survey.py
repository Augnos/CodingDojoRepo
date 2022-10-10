from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Survey:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comments = data['comments']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # # ---------- Get All Surveys-----------
    # @classmethod
    # def get_all(cls):
    #     query = "SELECT * FROM surveys;"
    #     results = connectToMySQL('sql_schema').query_db(query)
    #     surveys = []
    #     for survey in results:
    #         surveys.append(cls(survey))
    #     return surveys

    # # ---------- Get One Survey-----------
    # @classmethod
    # def get_one(cls, data):
    #     query = "SELECT * FROM surveys WHERE id = %(id)s;"
    #     results = connectToMySQL('sql_schema').query_db(query, data)
    #     surveys = []
    #     for survey in results:
    #         surveys.append(cls(survey))
    #     return surveys

    # ---------- Insert New Survey-----------
    @classmethod
    def insert_new_survey(cls, data):
        query = "INSERT INTO surveys ( created_at, updated_at ) VALUES ( NOW() , NOW() );"
        return connectToMySQL('sql_schema').query_db(query, data)

    # # ---------- Update Survey -----------
    # @classmethod
    # def update_survey(cls, data):
    #     query = "UPDATE surveys SET updated_at = NOW() WHERE id = %(id)s;"
    #     return connectToMySQL('sql_schema').query_db(query, data)

    # # ---------- Delete Survey -----------
    # @classmethod
    # def delete(cls, data):
    #     query = "DELETE FROM surveys WHERE id = %(id)s;"
    #     return connectToMySQL('sql_schema').query_db(query, data)