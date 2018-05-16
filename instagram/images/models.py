from django.db import models
from instagram.users import models as user_models


class TimeStampedModel(models.Model):

    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    class Meta:
        abstract = True


class Image(TimeStampedModel):
    """ Image Model"""

    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)


class Comment(TimeStampedModel):
    """ Comment Model"""

    message = models.TextField()
    image = models.ForeignKey(Image, on_delete=models.CASCADE, null=True)
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)


class Like(TimeStampedModel):
    """ LiKE Model"""

    image = models.ForeignKey(Image, on_delete=models.CASCADE, null=True)
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)
