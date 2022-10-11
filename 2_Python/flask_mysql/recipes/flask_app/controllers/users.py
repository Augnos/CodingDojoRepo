from flask import render_template, redirect, request, session, flash
from flask_app import app
from flask_app.models.user import User

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


# -----------------------------------------------------
# -------------------- GET Routes ---------------------
# -----------------------------------------------------

# ---------- Home Page -----------
@app.route("/")
def index():
    return render_template("index.html")

# # ---------- Recipes -----------
# @app.route("/recipes")
# def recipes():
#     return render_template("recipes.html")


# ------------------------------------------------------
# -------------------- POST Routes ---------------------
# ------------------------------------------------------

# ---------- Register New User Post -----------
@app.route('/insert/user', methods=["POST"])
def insert_user():
    if User.reg_validation(request.form):

        data = {
            "first_name": request.form["first_name"],
            "last_name": request.form["last_name"],
            "email": request.form["email"],
            "password": bcrypt.generate_password_hash(request.form["password"])
        }

        User.insert_user(data)
        return redirect('/')
    return redirect('/')


# ---------- Login As User Post -----------
@app.route('/login', methods=["POST"])
def login():

    # see if the username provided exists in the database
    data = { "email" : request.form["email"] }
    user_in_db = User.get_by_email(data)

    # user is not registered in the db
    if not user_in_db:
        flash("Invalid Email/Password")
        return redirect("/")

    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        # if we get False after checking the password
        flash("Invalid Email/Password")
        return redirect('/')

    # if the passwords matched, we set the user_id into session
    session['user_id'] = user_in_db.id
    # never render on a post!!!
    return redirect("/recipes")


# ---------- Login Out User Post -----------
@app.route('/logout')
def logout():
    session.clear()
    print("session cleared!")
    return redirect("/")

