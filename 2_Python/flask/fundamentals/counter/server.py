from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'super secret key'

@app.route('/')
def index():
    if 'visits' in session:
        print("key 'visits' exists!")
    else:
        print("key 'visits' does NOT exist. Creating key...")
        session['visits'] = 0

    if 'counter' in session:
        print("key 'counter' exists!")
    else:
        print("key 'counter' does NOT exist. Creating key...")
        session['counter'] = 0

    session['visits'] += 1
    session['counter'] += 1
    return render_template('index.html', visits = session['visits'], counter = session['counter'])

@app.route('/destroy_session')
def destroy_session():
    print('Session destroyed.')
    # session.clear()
    session.pop('counter')
    return redirect('/')

@app.route('/add_to_counter', methods=['POST'])
def plus_two():
    print(f"Adding {request.form['add_value']} to key 'counter'.")
    session['counter'] += int(request.form['add_value']) - 1
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)