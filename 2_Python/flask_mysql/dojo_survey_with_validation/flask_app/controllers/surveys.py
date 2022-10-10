from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.survey import Survey

@app.route('/')
def index():
    return render_template('index.html')




@app.route('/result')
def result():
    return render_template('result.html', session_name = session['name'], session_location = session['location'], session_language = session['language'], session_comments = session['comments'])






if __name__=="__main__":
    app.run(debug=True)
# -----------------------------------------------------
# -------------------- GET Routes ---------------------
# -----------------------------------------------------

# ---------- Home Page -----------
@app.route("/")
def index():
    return redirect('/surveys')


# ---------- Surveys (all) Page -----------
@app.route("/surveys")
def surveys_all():
    surveys = Survey.get_all()
    print(surveys)
    return render_template("surveys.html", all_surveys=surveys)


# ---------- Surveys (one) Page -----------
@app.route("/surveys/<id>")
def surveys_one(id):
    data = {
        "id": id,
    }
    surveys = Survey.get_one(data)
    print(surveys)
    return render_template("show_survey.html", all_surveys=surveys)


# ------------------------------------------------------
# -------------------- POST Routes ---------------------
# ------------------------------------------------------

# ---------- Insert New Survey Post -----------
@app.route('/insert/survey', methods=["POST"])
def insert_survey():
    data = {
        "name": request.form["survey_name"],
        "location": request.form["survey_location"],
        "language": request.form["survey_language"],
        "comments": request.form["survey_comments"],
    }
    Survey.insert_new_survey(data)
    return redirect('/')


# ---------- Update Survey Post -----------
@app.route('/surveys/<id>/update', methods=["POST"])
def edit_survey(id):
    data = {
        "id": id,
        "name": request.form["name"],
    }
    Survey.update_survey(data)
    return redirect('/')


# ---------- Delete Survey Post -----------
@app.route('/surveys/<id>/delete')
def delete_survey(id):

    data = {"id": id}
    Survey.delete(data)
    return redirect('/')
