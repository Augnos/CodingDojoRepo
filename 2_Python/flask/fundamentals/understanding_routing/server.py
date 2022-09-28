from flask import Flask  # Import Flask to allow us to create our app

app = Flask(__name__)    # Create a new instance of the Flask class called "app"

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<string:hi_name>')
def say(hi_name):
    return f"Hi {str.capitalize(hi_name)}!"

@app.route('/repeat/<int:num>/<string:repeat_text>')
def repeate(num,repeat_text):
    return f"{num * repeat_text}"

@app.route('/<err404>')
def page_not_found(err404):
    return f"Sorry! No response. Try again"

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
