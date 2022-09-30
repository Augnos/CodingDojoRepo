from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "ds;flknaso;difnaslefj"

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/survey', methods=['POST'])
def submit():
    session['name'] = request.form['survey_name']
    session['location'] = request.form['survey_location']
    session['language'] = request.form['survey_language']
    session['comments'] = request.form['survey_comments']
    print(session['name'])
    return redirect('/result')
    
    
    # return redirect('/result')

@app.route('/result')
def result():
    return render_template('result.html', session_name = session['name'], session_location = session['location'], session_language = session['language'], session_comments = session['comments'])






if __name__=="__main__":
    app.run(debug=True)