from flask import render_template, redirect, request
from flask_app import app
from flask_bcrypt import Bcrypt
from flask_app.models.model import Model


# -----------------------------------------------------
# -------------------- GET Routes ---------------------
# -----------------------------------------------------

# ---------- Home Page -----------
@app.route("/")
def index():
    return redirect('/models')


# ---------- Models (all) Page -----------
@app.route("/models")
def models():
    return render_template("models.html", all_models = Model.select_all_models())


# ---------- Models (one) Page -----------
@app.route("/models/<id>")
def models_one(id):
    return render_template("show_model.html", model = Model.get_one({"id":id}))


# ------------------------------------------------------
# -------------------- POST Routes ---------------------
# ------------------------------------------------------

# ---------- Insert New Model Post -----------
@app.route('/insert/model', methods=["POST"])
def insert_model():
    data = {
        "name": request.form["name"],
    }
    Model.insert_new_model(data)
    return redirect('/')


# ---------- Update Model Post -----------
@app.route('/models/<id>/update', methods=["POST"])
def edit_model(id):
    data = {
        "id": id,
        "name": request.form["name"],
    }
    Model.update_model(data)
    return redirect('/')


# ---------- Delete Model Post -----------
@app.route('/models/<id>/delete')
def delete_model(id):

    data = {"id": id}
    Model.delete(data)
    return redirect('/')


# # ---------- Bcrypt Password Post -----------
# @app.route('/register/user', methods=['POST'])
# def register():
#     # validate the form here ...
#     # create the hash
#     pw_hash = bcrypt.generate_password_hash(request.form['password'])
#     print(pw_hash)
#     # put the pw_hash into the data dictionary
#     data = {
#         "username": request.form['username'],
#         "password" : pw_hash
#     }
#     # Call the save @classmethod on User
#     user_id = User.save(data)
#     # store user id into session
#     session['user_id'] = user_id
#     return redirect("/dashboard")