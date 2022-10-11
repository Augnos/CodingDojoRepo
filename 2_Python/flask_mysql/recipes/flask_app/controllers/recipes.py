from flask import render_template, redirect, request, session
from flask_app import app
from flask_app.models.recipe import Recipe
from flask_app.models.user import User


# -----------------------------------------------------
# -------------------- GET Routes ---------------------
# -----------------------------------------------------

# ---------- All Recipes Page -----------
@app.route("/recipes")
def recipes():
    return render_template("recipes.html", all_recipes = Recipe.select_all_recipes(), user = User.get_by_id(session['user_id']))


# ---------- New Recipe Page -----------
@app.route("/recipes/create")
def create_recipe():
    return render_template("new_recipe.html", user = User.get_by_id(session['user_id']))


# ---------- View Recipe Page -----------
@app.route("/recipes/<int:id>")
def show_recipe(id):
    return render_template("view_recipe.html", recipe = Recipe.select_one_recipe({"id":id}), user = User.get_by_id(session['user_id']))


# ---------- Edit Recipe Page -----------
@app.route("/recipes/<int:id>/update")
def update_recipe():
    return render_template("edit_recipe.html", recipe = Recipe.get_one({"id":id}), user = User.get_by_id(session['user_id']))


# ------------------------------------------------------
# -------------------- POST Routes ---------------------
# ------------------------------------------------------

# ---------- Insert New Recipe Post -----------
@app.route('/insert_recipe', methods=["POST"])
def insert_recipe():
    data = {
        "name": request.form["name"],
    }
    Recipe.insert_new_recipe(data)
    return redirect('/recipes')


# ---------- Update Recipe Post -----------
@app.route('/update_recipe', methods=["POST"])
def edit_recipe(id):
    data = {
        "id": id,
        "name": request.form["name"],
    }
    Recipe.update_recipe(data)
    return redirect('/recipes')


# ---------- Delete Recipe Post -----------
@app.route('/delete_recipe')
def delete_recipe(id):

    data = {"id": id}
    Recipe.delete(data)
    return redirect('/recipes')
