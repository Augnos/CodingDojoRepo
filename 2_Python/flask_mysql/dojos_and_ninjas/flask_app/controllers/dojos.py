from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.dojo import Dojo
from flask_app.models.dojo import Ninja

# ---------- Home Page -----------
@app.route("/")
def index():
    return redirect('/dojos')


# ---------- Dojos (all) Page -----------
@app.route("/dojos")
def dojos():
    dojos = Dojo.get_all()
    print(dojos)
    return render_template("dojos.html", all_dojos = dojos)


# ---------- New Ninja Page -----------
@app.route("/ninjas")
def new_ninja():
    dojos = Dojo.get_all()
    return render_template("new_ninja.html", all_dojos = dojos)


# ---------- Create New Ninja Post -----------
@app.route('/ninjas/create', methods=["POST"])
def create_ninja():
    
    data = {
        "dojo_id": request.form["dojo_id"],
        "first_name": request.form["first_name"],
        "last_name" : request.form["last_name"],
        "age" : request.form["age"]
    }
    
    Ninja.save_new_ninja(data)
    
    return redirect('/')

# ---------- Create New Dojo Post -----------
@app.route('/create_dojo', methods=["POST"])
def create_dojo():
    
    data = {
        "new_dojo_name": request.form["new_dojo_name"],
    }
    
    Dojo.save_new_dojo(data)
    
    return redirect('/')

# ---------- Show Dojo Page -----------
@app.route("/dojos/<id>")
def show(id):

    dojos = Dojo.get_one(id)
    print(dojos)
    
    ninjas = Ninja.get_all_in_dojo(id)
    print(dojos)
    return render_template("show_dojo.html", all_dojos = dojos, all_ninjas = ninjas)



# # ---------- Edit Dojo Page -----------
# @app.route("/dojos/<id>/edit")
# def edit(id):
    
#     dojos = Dojo.get_one(id)
#     print(dojos)
#     return render_template("edit.html", all_dojos = dojos, dojo_id = id)


# # ---------- Edit Dojo Post -----------
# @app.route('/edit_dojo/<id>', methods=["POST"])
# def edit_dojo(id):

#     data = {
#         "id": id,
#         "fname": request.form["fname"],
#         "lname" : request.form["lname"],
#         "eaddress" : request.form["eaddress"]
#     }

#     Dojo.edit_dojo(data)
#     return redirect('/')


# # ---------- Delete Dojo Post -----------
# @app.route('/dojos/<int:id>/destroy')
# def delete_dojo(id):
    
#     data = {"id": id}
#     Dojo.delete(data)
#     return redirect('/')