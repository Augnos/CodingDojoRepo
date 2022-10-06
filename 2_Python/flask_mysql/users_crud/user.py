# import the function that will return an instance of a connection
from mysqlconnection import connectToMySQL
# model the class after the user table from our database


class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    # ---------- Get All -----------
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL('users_schema').query_db(query)
        users = []
        for user in results:
            users.append(cls(user))
        return users


    # ---------- Get One -----------
    @classmethod
    def get_one(cls,id):
        query = "SELECT * FROM users WHERE id = " + id + ";"
        results = connectToMySQL('users_schema').query_db(query)
        users = []
        for user in results:
            users.append(cls(user))
        return users


    # ---------- Save New User -----------
    @classmethod
    def save_new_user(cls, data ):
        query = "INSERT INTO users ( first_name , last_name , email , created_at, updated_at ) VALUES ( %(fname)s , %(lname)s , %(eaddress)s , NOW() , NOW() );"
        return connectToMySQL('users_schema').query_db( query, data )


    # ---------- Edit User? -----------
    @classmethod
    def edit_user(cls, data ):
        query = "UPDATE users SET first_name = %(fname)s , last_name = %(lname)s , email = %(eaddress)s , updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('users_schema').query_db( query, data )


    # ---------- Delete User -----------
    @classmethod
    def delete(cls, data ):
        query = "DELETE FROM users WHERE id = %(id)s;"
        return connectToMySQL('users_schema').query_db( query, data )
