# Ввведение в Flask
Добавить практические задания к 2 лабам jinga2

Перейдите в каталог с проектом 

> если нет python, установим
`apt install python3.10-venv`

Создадим вируальную среду окружения, для того чтобы все требуемые пакеты устанавливались именно в нее, а не глобально
`python3 -m venv venv`

Активируем виртуальную среду. Об активации говорит префикс в начале строки (venv)
```bash
xub@xub:~/mystarthomepage$ . venv/bin/activate
(venv) xub@xub:~/mystarthomepage$ 
```
Для деактивации используется команда `deactivate`
```console
(venv) xub@xub:~/mystarthomepage$ deactivate
xub@xub:~/mystarthomepage$
```
Установим Flask
`pip install Flask`

Проверим установку
```console
(venv) xub@xub:~/mystarthomepage$ flask --version
Python 3.10.6
Flask 2.2.3
Werkzeug 2.2.3
```
> Werkzeug библиотека взаимодействия между python и веб сервером

Cоздадим файл .gitignore и добавим сгенерированные файлы, чтобы не тащить их в удаленный репозиторий
```
venv
__pycache__
```

В таком случае после добавления в удаленный репозиторий и извлечения проекта на другом хосте потребуется заного устанавливать зависимости.
Чтобы бысто их установить при извлечении из удаленного репозитория. Создадим файл со всеми зависимстями установленными в локальном окружении ключ `-l`. 

`pip freeze -l > requirements.txt`

Для того чтобы установить все зависимости из файла выполним следующую команду

`pip install -r requirements.txt`

Создадим файл main.py, выводящий hello world на экран, со следующим содержимым.
```py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```

В первой строке класс Flask импортируется из пакета flask.

Во второй строке создается объект Flask. Для этого конструктору Flask назначается аргумент __name__. Конструктор Flask должен иметь один обязательный аргумент. Им служит название пакета. В большинстве случаев значение __name__ подходит. Название пакета приложения используется фреймворком Flask, чтобы находить статические файлы, шаблоны и т.д.

Запустим сервер командой 
`flask --app main run`

```
 * Serving Flask app 'main'
 * Debug mode: off
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
```
Перейдем по адресу http://127.0.0.1:5000 и убедимся что все работает 

Для того чтобы выключить сервер нажмем комбинацию CTRL+C

При изменении кода проекта в данном режиме запуска сервера требуется его перезапуск. Для того чтобы исправить данное поведение запустим проект в режиме отладки.
`flask --app hello run --debug`
Измените программный код и убедитесь, что сервер автоматически перезагружается.

Вывод будет следующий 
```bash
 * Serving Flask app 'main'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 112-274-532
```

Для выкладывания кода в продакшн замените соответствующие строки в основном файле на строки ниже и запустите `python file_name.py`
```py
if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)
```

*Практические задания*

# Шаблоны в Flask

Для использования шаблонов испортируем модуль `render_template`.
Соответственно первая строчка основного файла, в качестве примера использовался main.py. Будет выглядеть следующим образои
`from flask import Flask, render_template`

Импортируемый модуль позволяет добавлять HTML файлы в качестве страниц через декоратор `route`.
Создадим два перенаправления страниц в основном файле. Первая будет главной страницей, а вторая обо мне.
```py
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/aboutme')
def aboutme():
    return render_template('aboutme.html')
```
В нашем случае появились два дополнительных файла index.html и aboutme.html. По умолчанию данные файлы храняться в каталоге `templates`, который находится в одной каталоге с основным файлом в нашем случае `main.py`.

Также существует возможность сделать несколько роутеров на одну html страницу.
```py
@app.route('/aboutme')
@app.route('/business_card')
```

Главная страница сайта выглядит самым простым образом.
````html
<!DOCTYPE html>
<head>
    <title>FlaskApp</title>
</head>
<body>
    <h1>Hello World!</h1>
    <h2>Welcome to FlaskApp!</h2>
</body>
</html>
```

Мы научились создавать шаблоты, передавать браузеру.
Рассмотрим вопрос как передавать параметры внуть шаблона.


При помощи фаблонов мы можем передавать информацию внутрь html документа.
Добавим параметр `title`, который мы хотим передать. Для этого используем номатицию *jinja2*, который представляет собой инструмент для html-шаблонизации. Более подробно его функцкиональность рассотрим на следующих практических занятиях

Файл main.py будет выглядеть следующим образом

```py
@app.route('/')
def index():
    return render_template('index.html', title='Стартовая страница сайта')
```

А в index.html заменим текст на шаблон *jinja2* `{{title}}`, который передаст параметр в html. 
```html
<!DOCTYPE html>
<head>
    <title>{{title}}</title>
</head>
<body>
    <h1>{{title}}</h1>
    <h2>Welcome to FlaskApp!</h2>
</body>
</html>

Расмотрим простой пример *jinja2* с циклом for для добавления HTML списка.
Добавим список в main.py и новый параметр mylist.
```py
mylist=['roadmap python', 'structure','algorithm','OOP' ]

@app.route('/')
def index():
    return render_template('index.html', title='Стартовая страница сайта', mylist=mylist)
```

Изменим html согласно спецификации *jinja2*.
```html
<!DOCTYPE html>
<head>
    <title>{{title}}</title>
</head>
<body>
    <h1>{{title}}</h1>
    <h2>Welcome to FlaskApp!</h2>
    <ul>
{% for x in mylist %}
<li>{{x}}</li>
{% endfor %}
    </ul>
</body>
</html>
```
ФОТО1 IMAGE_README

#### Наследование шаблонов

Наследование шаблонов позволяет создать главный шаблон и после его определения, добавлять его во все html файлы, наследуя структу полностью или частично с учетом возможности редактирования. 

Создадим базовый шаблон, который будет содержать шапку и подвал, основное окно сайта, в которой будет две панели одна слева, другая справа. Назовем его base.html.

Пошагово соберем подобный шаблон и для того чтобы отличать страницы добовим параметр title в роутер страницы aboutme.

```
@app.route('/aboutme')
def aboutme():
    return render_template('aboutme.html', title='Обо мне')
```

Приведем базовый шаблок к разделению на шапку подвал и контент.
```html
<!DOCTYPE html>
<head>
{% block title -%} 
    <title>{{title}}</title>
{% endblock%}
</head>
<body>
    <header>
        {% block header -%} 
    <div>{{title}}</div>
        {% endblock%}
    </header>
    <div>
        {% block content -%} 
        <div>{{title}}</div>
        {% endblock%}
    <div>
    <footer>
        {% block footer -%} 
        <div>{{title}}</header>
        {% endblock%}
    </footer>
</body>
</html>
```
Для переиспользования шаблона base.html изменим index.html и aboutme.html. Данные файлы будут состоять только из одной строчки. И проверим работоспособность. Если все правильно получилось базовый шаблон должен подтянуться к остальным документам.

```jinja2
{% extends 'base.html' -%}
````

Установим фоновый цвет в тегах базового шаблона и переопределим цвет текста в дочерних документах.
base.html приведем к виду.
```html
<!DOCTYPE html>
<head>
{% block title -%} 
    <title>{{title}}</title>
{% endblock %}
</head>
<body>
    <header>
        {% block header -%} 
        <div style="color: #030303">{{title}}</div>
        {% endblock %}
    </header>
    <div>
        {% block content -%} 
        <div style="color: #0400fc">{{title}}</div>
        {% endblock %}
    <div>
    <footer>
        {% block footer -%} 
        <div style="color: #4af706">{{title}}</div>
        {% endblock %}
    </footer>
</body>
</html>
```

index.html будет выглядеть следующим образом
```html
{% extends 'base.html' -%}
{% block content %} 
<div style="color: #83cd66">{{title}}</div>
{% endblock %}
```
Как мы видим aboutme.html унаследовал все от базового шаблона, а поведение index.html мы изменили. 
фото2
фото3

При помощи функции супер мы можем дописать наследовать шаблон и добавить новые теги

```html
{% extends 'base.html' -%}
{% block content %}
{{super()}}
<div style="color: #83cd66">{{title}}</div>
{% endblock %}
```
*Практические задания*

### jinja2