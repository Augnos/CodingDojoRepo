from flask import flash, session
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
        query = "SELECT * FROM recipes JOIN users ON users.id = recipes.user_id"
        results = connectToMySQL('recipes_schema').query_db(query)
        print(results)
        recipes = []
        for recipe in results:
            recipes.append(cls(recipe))
        return recipes


    # ---------- Select One Recipe -----------
    @classmethod
    def select_one_recipe(cls, data):
        query = "SELECT * FROM recipes JOIN users ON users.id = recipes.user_id WHERE recipes.id = %(id)s;"
        results = connectToMySQL('recipes_schema').query_db(query, data)
        print(results)
        recipes = []
        for recipe in results:
            recipes.append(cls(recipe))
        return recipes


    # ---------- Insert New Recipe -----------
    @classmethod
    def insert_recipe(cls, data):
        query = "INSERT INTO recipes ( name, user_id, description, instructions, date_made, under_30, created_at, updated_at ) VALUES (%(name)s, %(user_id)s, %(description)s, %(instructions)s, %(date_made)s, %(under_30)s, NOW(), NOW() );"
        return connectToMySQL('recipes_schema').query_db(query, data)


    # ---------- Update Recipe -----------
    @classmethod
    def update_recipe(cls, data):
        query = "UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, date_made = %(date_made)s, under_30 = %(under_30)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('recipes_schema').query_db(query, data)


    # ---------- Delete Recipe -----------
    @classmethod
    def delete_recipe(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"
        return connectToMySQL('recipes_schema').query_db(query, data)


    # ---------- Delete Recipe Validation -----------
    @classmethod
    def delete_recipe(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"
        return connectToMySQL('recipes_schema').query_db(query, data)


    # ---------- New Recipe Validation -----------
    @staticmethod
    def recipe_valid(recipe):
        is_valid = True
        
        if  len(recipe["name"]) < 3:
            is_valid = False
            flash("Name must contain at least 3 characters.")
        
        if  len(recipe["description"]) < 3:
            is_valid = False
            flash("Description must contain at least 3 characters.")
        
        if  len(recipe["instructions"]) < 3:
            is_valid = False
            flash("Instructions must contain at least 3 characters.")
        
        if not recipe["date_made"]:
            is_valid = False
            flash("Date cooked/made cannot be empty.")
        
        if not recipe["under_30"]:
            is_valid = False
            flash('"Under 30 minutes" needs to be selected Yes or No.')
        
        if  not session["user_id"]:
            is_valid = False
            flash("You must be logged in to create/edit a recipe.")
        
        return is_valid