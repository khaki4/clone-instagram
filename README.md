# clone instagram

## commands

### for Backend

pipenv --three
pipenv shell
pipenv install -r requirements/local.txt

python manage.py runserver

django-admin startapp images

python manage.py createsuperuser

pipenv install django-taggit

django-admin startapp notifications

pipenv install djangorestframework-jwt

pipenv install django-taggit-serializer

### for Frontend

pipenv install django-cors-headers

---

## todo list
https://trello.com/b/g5Hr3LHg/clone-instagram
