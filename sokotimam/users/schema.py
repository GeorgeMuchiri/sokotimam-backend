import email
import graphene
from graphene_django import DjangoObjectType
import graphql_jwt

from .models import NewUser

class NewUserType(DjangoObjectType):
    class Meta:
        model = NewUser

class Query(graphene.ObjectType):
    users = graphene.List(NewUserType)
    me = graphene.Field(NewUserType)

    def resolve_users(self, info):
        return NewUser.objects.all()

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')

        return user


class CreateUsers(graphene.Mutation):
    id = graphene.Int()
    username = graphene.String()
    firstname = graphene.String()
    lastname = graphene.String()
    email = graphene.String()
    phone =  graphene.String()
    address = graphene.String()
    password = graphene.String()

    class Arguments:
        username = graphene.String()
        firstname = graphene.String()
        lastname = graphene.String()
        email = graphene.String()
        phone =  graphene.String()
        address = graphene.String()
        password = graphene.String()

    def mutate(self, info, email, username, firstname, lastname, phone, password):
        users  = NewUser.objects.create_user(email=email, username = username, firstname=firstname, lastname=lastname, phone=phone,
        
        password = password)

        users.save()

        return CreateUsers(
            id=users.id,
            email=users.email,
            username = users.username,
            firstname = users.firstname,
            lastname = users.lastname,
            phone = users.phone,
            password = users.password,
            address = users.address
        )

class Mutation(graphene.ObjectType):
    create_users = CreateUsers.Field()
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


