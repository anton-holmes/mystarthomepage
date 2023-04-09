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

franela/k8s:latest

add golang 
add kind install kubectl in documents

apk update && apk upgrade && apk add go

git clone https://github.com/d-prysenko/kind.git

cd kind 

make install

[node1] (local) root@192.168.0.18 ~/kind
$ kind --version
kind version 0.19.0-alpha.0.19.1+26a23607252863

kind create cluster

# install bubectl
https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/

curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"

echo "$(cat kubectl.sha256)  kubectl" | sha256sum -c

>kubectl: OK

sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl


kubectl version
> WARNING: This version information is deprecated and will be replaced with the output from kubectl version --short.  Use --output=yaml|json to get the full version.
Client Version: version.Info{Major:"1", Minor:"26", GitVersion:"v1.26.3", GitCommit:"9e644106593f3f4aa98f8a84b23db5fa378900bd", GitTreeState:"clean", BuildDate:"2023-03-15T13:40:17Z", GoVersion:"go1.19.7", Compiler:"gc", Platform:"linux/amd64"}
Kustomize Version: v4.5.7
Server Version: version.Info{Major:"1", Minor:"26", GitVersion:"v1.26.3", GitCommit:"9e644106593f3f4aa98f8a84b23db5fa378900bd", GitTreeState:"clean", BuildDate:"2023-03-30T06:34:50Z", GoVersion:"go1.19.7", Compiler:"gc", Platform:"linux/amd64"}


# start simple project