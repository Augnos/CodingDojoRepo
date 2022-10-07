from flask_app.config.mysqlconnection import connectToMySQL

class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    # ---------- Get All -----------
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL('dojos_and_ninjas').query_db(query)
        dojos = []
        for dojo in results:
            dojos.append(cls(dojo))
        return dojos


    # # ---------- Get One -----------
    # @classmethod
    # def get_one(cls,id):
    #     query = "SELECT * FROM dojos WHERE id = " + id + ";"
    #     results = connectToMySQL('dojos_and_ninjas').query_db(query)
    #     dojos = []
    #     for dojo in results:
    #         dojos.append(cls(dojo))
    #     return dojos


    # # ---------- Save New Dojo -----------
    # @classmethod
    # def save_new_dojo(cls, data ):
    #     query = "INSERT INTO dojos ( first_name , last_name , email , created_at, updated_at ) VALUES ( %(fname)s , %(lname)s , %(eaddress)s , NOW() , NOW() );"
    #     return connectToMySQL('dojos_and_ninjas').query_db( query, data )


    # # ---------- Edit Dojo? -----------
    # @classmethod
    # def edit_dojo(cls, data ):
    #     query = "UPDATE dojos SET first_name = %(fname)s , last_name = %(lname)s , email = %(eaddress)s , updated_at = NOW() WHERE id = %(id)s;"
    #     return connectToMySQL('dojos_and_ninjas').query_db( query, data )


    # # ---------- Delete Dojo -----------
    # @classmethod
    # def delete(cls, data ):
    #     query = "DELETE FROM dojos WHERE id = %(id)s;"
    #     return connectToMySQL('dojos_and_ninjas').query_db( query, data )
