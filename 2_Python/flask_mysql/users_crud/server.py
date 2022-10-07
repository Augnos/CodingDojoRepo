from flask import Flask, render_template, request, redirect
# import the class from user.py
from user import User
app = Flask(__name__)


# ---------- Home Page ----------- done
@app.route("/")
def index():
    return redirect('/users')


# ---------- Users (all) Page ----------- done
@app.route("/users")
def users():
    users = User.get_all()
    print(users)
    return render_template("read_all.html", all_users = users)


# ---------- New User Page ----------- done
@app.route("/users/new")
def new():
    return render_template("create.html")


# ---------- Create New User Post ----------- done
@app.route('/create_user', methods=["POST"])
def create_user():
    
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "eaddress" : request.form["eaddress"]
    }
    
    User.save_new_user(data)
    
    return redirect('/')


# ---------- Show User Page ----------- done
@app.route("/users/<id>")
def show(id):

    users = User.get_one(id)
    print(users)
    return render_template("read_one.html", all_users = users, user_id = id)


# ---------- Edit User Page -----------
@app.route("/users/<id>/edit")
def edit(id):
    
    users = User.get_one(id)
    print(users)
    return render_template("edit.html", all_users = users, user_id = id)


# ---------- Edit User Post -----------
@app.route('/edit_user/<id>', methods=["POST"])
def edit_user(id):

    data = {
        "id": id,
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "eaddress" : request.form["eaddress"]
    }

    User.edit_user(data)
    return redirect('/')


# ---------- Delete User Post ----------- done
@app.route('/users/<int:id>/destroy')
def delete_user(id):
    
    data = {"id": id}
    User.delete(data)
    return redirect('/')



# ---------- Debug Mode -----------
if __name__ == "__main__":
    app.run(debug=True)