from flask import Flask, render_template, make_response
from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

@app.route("/hello")
def hello_world():
   return "<p>Hello, World!!!!</p>"


app = Flask(__name__)
auth = HTTPBasicAuth()

users = {
    "anton": generate_password_hash("hello"),
    "susan": generate_password_hash("bye")
}

@auth.verify_password
def verify_password(username, password):    
    if username in users and \
            check_password_hash(users.get(username), password):
        return username

        # return render_template('not_found.html')
        # make_response(render_template('not_found.html'), 401)

        # return make_response('Not authorization', 401, {'WWW-Authenticaate' : 'Basic realm = "Login Required"'})

mylist=['roadmap python', 'structure','algorithm','OOP' ]

@app.route('/home')
@app.route('/')
@auth.login_required
def index():
    return render_template('index.html', title='Стартовая страница сайта, пользователя {}!'.format(auth.current_user()), mylist=mylist)

# Проброс имени пользователя def index(): return "Hello, {}!".format(auth.current_user())

@app.route('/aboutme')
def aboutme():
    return render_template('aboutme.html', title='Обо мне')

if __name__ == "__main__":
    app.run(debug=True)

# if __name__ == "__main__":
#     from waitress import serve
#     serve(app, host="0.0.0.0", port=8080)

