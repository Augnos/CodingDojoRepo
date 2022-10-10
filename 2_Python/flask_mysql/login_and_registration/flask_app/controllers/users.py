from curses import flash
from flask import render_template, redirect, request
from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask_app.models.user import User


# -----------------------------------------------------
# -------------------- GET Routes ---------------------
# -----------------------------------------------------

# ---------- Home Page -----------
@app.route("/")
def index():
    return render_template("index.html")


# # ---------- Users (all) Page -----------
# @app.route("/users")
# def users():
#     return render_template("users.html", all_users = User.select_all_users())


# # ---------- Users (one) Page -----------
# @app.route("/users/<id>")
# def users_one(id):
#     return render_template("show_user.html", user = User.get_one({"id":id}))


# ------------------------------------------------------
# -------------------- POST Routes ---------------------
# ------------------------------------------------------

# ---------- Insert New User Post -----------
@app.route('/insert/user', methods=["POST"])
def insert_user():
    if User.reg_validation(request.form):

        data = {
            "first_name" : request.form["first_name"],
            "last_name" : request.form["last_name"],
            "email" : request.form["email"],
            "password" : bcrypt.generate_password_hash(request.form["password"])
        }
        
        User.insert_user(data)
        return render_template('index.html')
    return render_template('index.html')


# # ---------- Update User Post -----------
# @app.route('/users/<id>/update', methods=["POST"])
# def edit_user(id):
#     data = {
#         "id": id,
#         "name": request.form["name"],
#     }
#     User.update_user(data)
#     return redirect('/')


# # ---------- Delete User Post -----------
# @app.route('/users/<id>/delete')
# def delete_user(id):
#     data = {"id": id}
#     User.delete(data)
#     return redirect('/')


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