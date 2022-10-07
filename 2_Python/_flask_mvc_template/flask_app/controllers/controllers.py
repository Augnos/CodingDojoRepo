from flask_app import app
from flask import render_template, redirect, request, session, flash
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
def models_all():
    models = Model.get_all()
    print(models)
    return render_template("models.html", all_models=models)


# ---------- Models (one) Page -----------
@app.route("/models/<id>")
def models_one(id):
    data = {
        "id": id,
    }
    models = Model.get_one(data)
    print(models)
    return render_template("show_model.html", all_models=models)


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
