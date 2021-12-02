from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin


class UserAdminConfig(UserAdmin):
    search_fields  = ('email', 'username')
    ordering = ('-date_joined',)
    list_display = ('user_name', 'email', 'is_active', 'is_superuser',)
    list_filter  = ('email', 'user_name', 'is_staff', 'is_active')
    fieldsets = (
        (None, {'fields': ('email', 'user_name',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active')})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'user_name', 'password1', 'password2', 'is_active', 'is_staff',)
        }),
    )
admin.site.register(CustomUser, UserAdminConfig)

