from flask import Flask, render_template

app = Flask(__name__)

@app.route("/hello")
def hello_world():
   return "<p>Hello, World!!!!</p>"

mylist=['roadmap python', 'structure','algorithm','OOP' ]

@app.route('/')
def index():
    return render_template('index.html', title='Стартовая страница сайта', mylist=mylist)

@app.route('/aboutme')
def aboutme():
    return render_template('aboutme.html', title='Обо мне')

# if __name__ == "__main__":
    # app.run(debug=True)
if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)

