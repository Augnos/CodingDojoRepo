from flask import render_template, redirect, request
from flask_app import app
from flask_app.models.survey import Survey



# -----------------------------------------------------
# -------------------- GET Routes ---------------------
# -----------------------------------------------------

# ---------- Home Page -----------
@app.route("/")
def index():
    return redirect('/survey')


# ---------- Survey Page -----------
@app.route("/survey")
def surveys_all():
    return render_template("survey.html")


# ---------- Result Page -----------
@app.route('/results')
def result():
    return render_template('results.html', survey = Survey.get_last_survey())


# ------------------------------------------------------
# -------------------- POST Routes ---------------------
# ------------------------------------------------------

# ---------- Insert New Survey Post -----------
@app.route('/insert/survey', methods=["POST"])
def insert_survey():
    if Survey.is_valid(request.form):
        Survey.insert_new_survey(request.form)
        return redirect('/results')
    return redirect('/survey')
