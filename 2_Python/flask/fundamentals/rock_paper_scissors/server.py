from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'super secret key'

import random

@app.route('/')
def index():
    pick = ["rock", "paper", "scissors"]
    session["cpu_pick"] = pick[random.randint(0,2)]
    print(session["cpu_pick"])
    return render_template('index.html')

    
@app.route('/pick', methods=['POST'])
def pick():
    session['user_pick'] = request.form['picked']
    
    if (
        (request.form['picked'] == "paper" and session["cpu_pick"] =="rock") or 
        (request.form['picked'] == "scissors" and session["cpu_pick"] == "paper") or 
        (request.form['picked'] == "rock" and session["cpu_pick"] == "scissors")):
            print("user wins!")
            session['game_result'] = "user_wins"
    elif ( # lose situations
        (session["cpu_pick"] == "paper" and request.form['picked'] == "rock") or
        (session["cpu_pick"] == "scissors" and request.form['picked'] == "paper") or
        (session["cpu_pick"] == "rock" and request.form['picked'] == "scissors")):
            print("cpu wins!")
            session['game_result'] = "cpu_wins"
    else:
        print("tied!")
        session['game_result'] = "tied_game"

    return redirect('/result')

@app.route('/result')
def result():
    return render_template('index.html', result = session['game_result'], user_pick = session['user_pick'], cpu_pick = session['cpu_pick'])


if __name__=="__main__":
    app.run(debug=True)
