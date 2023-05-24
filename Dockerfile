FROM python:3-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY requirements.txt ./

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

# Bundle app source
COPY . .

ENV FLASK_APP=main.py

EXPOSE 5001
CMD [ "flask", "run","--host","0.0.0.0","--port","5001"]        