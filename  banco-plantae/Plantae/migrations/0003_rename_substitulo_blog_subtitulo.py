# Generated by Django 4.2.1 on 2023-06-12 16:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Plantae', '0002_alter_blog_texto_alter_blog_titulo_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blog',
            old_name='substitulo',
            new_name='subtitulo',
        ),
    ]
