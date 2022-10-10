from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Survey:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    # ---------- Insert New Survey -----------
    @classmethod
    def insert_new_survey(cls, data):
        query = "INSERT INTO dojos ( name, location, language, comment, created_at, updated_at ) VALUES ( %(name)s , %(location)s , %(language)s , %(comment)s ,NOW() , NOW() );"
        return connectToMySQL('dojo_survey_schema').query_db(query, data)


    # ---------- Get Last Survey -----------
    @classmethod
    def get_last_survey(cls):
        query = "SELECT * FROM dojos ORDER BY id DESC LIMIT 1;"
        results = connectToMySQL('dojo_survey_schema').query_db(query)
        return Survey(results[0])


    # ---------- Validation -----------
    @staticmethod
    def is_valid(survey):
        is_valid = True
        if len(survey['name']) < 3:
            is_valid = False
            flash("Name must be at least 3 characters")
        if len(survey['location']) < 3:
            is_valid = False
            flash("A location must be selected")
        if len(survey['language']) < 3:
            is_valid = False
            flash("A language must be selected")
        return is_valid