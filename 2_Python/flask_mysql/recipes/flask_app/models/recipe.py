from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL



class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.under_30 = data['under_30']
        self.instructions = data['instructions']
        self.date_made = data['date_made']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']


    # ---------- Select All Recipes -----------
    @classmethod
    def select_all_recipes(cls):
        query = "SELECT recipes.id, recipes.name, recipes.description, recipes.under_30, recipes.instructions, recipes.date_made, recipes.user_id, recipes.created_at, recipes.updated_at, users.first_name, users.last_name last_name FROM users LEFT JOIN recipes ON users.id = recipes.user_id"
        results = connectToMySQL('recipes_schema').query_db(query)
        print(results)
        recipes = []
        for recipe in results:
            recipes.append(cls(recipe))
        return recipes


    # ---------- Select One Recipe -----------
    @classmethod
    def select_one_recipe(cls, data):
        query = "SELECT * FROM recipes WHERE id = %(id)s;"
        results = connectToMySQL('recipes_schema').query_db(query, data)
        recipes = []
        for recipe in results:
            recipes.append(cls(recipe))
        return recipes


    # ---------- Insert New Recipe -----------
    @classmethod
    def insert_recipe(cls, data):
        query = "INSERT INTO recipes ( created_at, updated_at ) VALUES ( NOW() , NOW() );"
        return connectToMySQL('recipes_schema').query_db(query, data)


    # ---------- Update Recipe -----------
    @classmethod
    def update_recipe(cls, data):
        query = "UPDATE recipes SET updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('recipes_schema').query_db(query, data)


    # ---------- Delete Recipe -----------
    @classmethod
    def delete_recipe(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"
        return connectToMySQL('recipes_schema').query_db(query, data)


    # ---------- Validation -----------
    @staticmethod
    def is_valid(survey):
        is_valid = True
        if survey == False:
            is_valid = False
            flash("Survey must be true!")
        return is_valid