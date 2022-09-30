from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'super secret key'

import random

@app.route('/')
def index():
    if 'game_number' in session:
        print('previous game already generated')
    else:
        print('creating new game')
        session["game_number"] = random.randint(1,100)
        session["guess_count"] = 0

    return render_template('index.html', number = session['game_number'])

@app.route('/guess', methods=['POST'])
def guess():
    guess_response = ""
    session["guess_count"] += 1

    if int(request.form['guessed_number']) == session['game_number']:
        print('correct guess')
        guess_response = "correct"
    elif int(request.form['guessed_number']) > session['game_number']:
        print('number too high')
        guess_response = "high"
    else:
        print('number too low')
        guess_response = "low"

    return render_template('index.html', response = guess_response, number = session['game_number'], guess_count = session['guess_count'])

@app.route('/new_game')
def destroy_session():
    print('Session destroyed.')
    session.clear()
    # session.pop('counter')
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)