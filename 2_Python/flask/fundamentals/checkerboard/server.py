from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', checkerX = 8, checkerY = 8, color1 = "red", color2 = "black")

@app.route('/<int:input_y>')
def input_y(input_y):
    return render_template('index.html', checkerX = 8, checkerY = input_y, color1 = "red", color2 = "black")

@app.route('/<int:input_x>/<int:input_y>')
def input_xy(input_x,input_y):
    return render_template('index.html', checkerX = input_x, checkerY = input_y, color1 = "red", color2 = "black")

@app.route('/<int:input_x>/<int:input_y>/<input_color1>')
def input_color1(input_x,input_y,input_color1):
    return render_template('index.html', checkerX = input_x, checkerY = input_y, color1 = input_color1, color2 = "black")

@app.route('/<int:input_x>/<int:input_y>/<input_color1>/<input_color2>')
def input_colors(input_x,input_y,input_color1,input_color2):
    return render_template('index.html', checkerX = input_x, checkerY = input_y, color1 = input_color1, color2 = input_color2)


if __name__=="__main__":
    app.run(debug=True)