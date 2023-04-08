# mystarthomepage

### INSTALL
Перейдите в каталог с проектом 

> если нет python, установим
`apt install python3.10-venv`

Создадим вируальную среду окружения, для того чтобы все требуемые пакеты устанавливались именно в нее, а не глобально
`python3 -m venv venv`

Активируем виртуальную среду. Об активации говорит префикс в начале строки (venv)
```console
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

### Minimal project Flask

add golang 
add kind install kubectl in documents