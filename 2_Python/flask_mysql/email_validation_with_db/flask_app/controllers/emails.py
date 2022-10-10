from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.email import Email


# -----------------------------------------------------
# -------------------- GET Routes ---------------------
# -----------------------------------------------------

# ---------- Home Page -----------
@app.route("/")
def index():
    return render_template("index.html")


# ---------- Success Page -----------
@app.route("/success")
def success():
    return render_template("success.html", recent_email = Email.select_recent_email(), all_emails = Email.select_all_emails())

# ------------------------------------------------------
# -------------------- POST Routes ---------------------
# ------------------------------------------------------

# ---------- Insert New Email Post -----------
@app.route('/insert/email', methods=["POST"])
def insert_email():
    if Email.email_valid(request.form):
        Email.insert_new_email(request.form)
        return redirect('/success')
    return redirect("/")

