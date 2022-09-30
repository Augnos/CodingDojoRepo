from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'super secret key'

import random

@app.route('/')
def index():
    session["cpu_pick"] = random.randint(0,2)
    return render_template('index.html')

# pick = {
#     [0, "rock"]
#     [1, "paper"]
#     [2, "scissors"]}
    
@app.route('/pick', methods=['POST'])
def pick():
    user_pick = int(request.form['picked'])
    if (
        (user_pick == 1 and session["cpu_pick"] == 0) or 
        (user_pick == 2 and session["cpu_pick"] == 1) or 
        (user_pick == 0 and session["cpu_pick"] == 2)):
            print("user wins!")
    elif ( # lose situations
        (session["cpu_pick"] == 1 and user_pick == 0) or
        (session["cpu_pick"] == 2 and user_pick == 1) or
        (session["cpu_pick"] == 0 and user_pick == 2)):
            print("cpu wins!")
    else:
        print("tied!")
        
    session["cpu_pick"] = random.randint(0,2)

    return redirect('/')


if __name__=="__main__":
    app.run(debug=True)
