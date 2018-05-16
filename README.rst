pipenv --three
pipenv shell
pipenv install -r requirements/local.txt

django-admin startapp images

python manage.py createsuperuser
