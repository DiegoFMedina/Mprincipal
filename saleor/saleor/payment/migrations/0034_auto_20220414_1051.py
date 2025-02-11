# Generated by Django 3.2.12 on 2022-04-14 10:51

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("payment", "0033_rewrite_payment_order_relations"),
    ]

    operations = [
        migrations.RenameField(
            model_name="payment",
            old_name="created",
            new_name="created_at",
        ),
        migrations.RenameField(
            model_name="payment",
            old_name="modified",
            new_name="modified_at",
        ),
        migrations.RenameField(
            model_name="transaction",
            old_name="created",
            new_name="created_at",
        ),
    ]
