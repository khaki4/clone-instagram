pipenv --three
pipenv shell
pipenv install -r requirements/local.txt

django-admin startapp images

python manage.py createsuperuser

---

[ ] Get user feed [GET]
[ ] Like an Image [POST]
[ ] Unlike an Image [DELETE]
[ ] Comment on an image [POST]
[ ] Delete a comment that I created [DELETE]
[ ] Get people to follow on Explore [GET]
[ ] Follow user [POST]
[ ] Unfollow User [POST]
[ ] Get profile with images [GET]
[ ] Get list of followers [GET]
[ ] Get list of following [GET]
[ ] Search images by hashtag [GET]
[ ] Search users by username [GET]
[ ] See notifications [GET]
[ ] Create notification (for follow, comment and like) [POST]
[ ] Delete any comment from my photos [DELETE]
[ ] Get single photo [GET]
[ ] List photo likes [GET]
[ ] Edit a photo [PUT]
[ ] Delete a photo [DELETE]
[ ] Update profile [PUT]
[ ] Change password [PUT]
[ ] JWT Token Authentication
[ ] Log in [POST]
[ ] Sign up [POST]
[ ] Upload a photo [POST]
[ ] Log in with Facebook [POST]
