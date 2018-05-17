from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from instagram.users import models as user_models


@python_2_unicode_compatible
class TimeStampedModel(models.Model):

    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    class Meta:
        abstract = True


@python_2_unicode_compatible
class Image(TimeStampedModel):
    """ Image Model"""

    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return '{} - {}'.format(self.location, self.caption)


@python_2_unicode_compatible
class Comment(TimeStampedModel):
    """ Comment Model"""

    message = models.TextField()
    image = models.ForeignKey(Image, on_delete=models.CASCADE, null=True)
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.message


@python_2_unicode_compatible
class Like(TimeStampedModel):
    """ LiKE Model"""

    image = models.ForeignKey(Image, on_delete=models.CASCADE, null=True)
    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return 'User: {} - Image Caption: {}'.format(self.creator.username, self.image.caption)
