from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.dojo import Dojo

# ---------- Home Page ----------- done
@app.route("/")
def index():
    return redirect('/dojos')


# ---------- Dojos (all) Page ----------- done
@app.route("/dojos")
def dojos():
    dojos = Dojo.get_all()
    print(dojos)
    return render_template("dojos.html", all_dojos = dojos)


# # ---------- New Dojo Page ----------- done
# @app.route("/dojos/new")
# def new():
#     return render_template("create.html")


# # ---------- Create New Dojo Post ----------- done
# @app.route('/create_dojo', methods=["POST"])
# def create_dojo():
    
#     data = {
#         "fname": request.form["fname"],
#         "lname" : request.form["lname"],
#         "eaddress" : request.form["eaddress"]
#     }
    
#     Dojo.save_new_dojo(data)
    
#     return redirect('/')


# # ---------- Show Dojo Page ----------- done
# @app.route("/dojos/<id>")
# def show(id):

#     dojos = Dojo.get_one(id)
#     print(dojos)
#     return render_template("read_one.html", all_dojos = dojos, dojo_id = id)


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


# # ---------- Delete Dojo Post ----------- done
# @app.route('/dojos/<int:id>/destroy')
# def delete_dojo(id):
    
#     data = {"id": id}
#     Dojo.delete(data)
#     return redirect('/')