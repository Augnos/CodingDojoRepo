from flask import Flask, render_template, redirect
app = Flask(__name__)

@app.route('/')
def home():
    return redirect("/play")

@app.route('/play')
def level1():
    return render_template('index.html', times = 3, bgColor = "#9fc5f8")

@app.route('/play/<int:count>')
def level2(count):
    return render_template('index.html', times = count, bgColor = "#9fc5f8")

@app.route('/play/<int:count>/<color>')
def level3(count, color):
    return render_template('index.html', times = count, bgColor = color)

if __name__=="__main__":
    app.run(debug=True)
