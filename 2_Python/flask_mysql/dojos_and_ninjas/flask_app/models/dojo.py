from flask_app.config.mysqlconnection import connectToMySQL


class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.dojo_id = data['dojo_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # ---------- Get All Ninjas-----------
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas;"
        results = connectToMySQL('dojos_and_ninjas').query_db(query)
        ninjas = []
        for ninja in results:
            ninjas.append(cls(ninja))
        return ninjas

    # ---------- Get All Ninjas in Dojo-----------
    @classmethod
    def get_all_in_dojo(cls, id):
        query = "SELECT * FROM ninjas WHERE dojo_id = " + id + ";"
        results = connectToMySQL('dojos_and_ninjas').query_db(query)
        ninjas = []
        for ninja in results:
            ninjas.append(cls(ninja))
        return ninjas

    # ---------- Save New Ninja -----------
    @classmethod
    def save_new_ninja(cls, data ):
        query = "INSERT INTO ninjas ( first_name , last_name , age , dojo_id , created_at, updated_at ) VALUES ( %(first_name)s , %(last_name)s , %(age)s , %(dojo_id)s , NOW() , NOW() );"
        return connectToMySQL('dojos_and_ninjas').query_db( query, data )


class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # ---------- Get All Dojos-----------
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL('dojos_and_ninjas').query_db(query)
        dojos = []
        for dojo in results:
            dojos.append(cls(dojo))
        return dojos

    # ---------- Get One Dojo-----------
    @classmethod
    def get_one(cls, id):
        query = "SELECT * FROM dojos WHERE id = " + id + ";"
        results = connectToMySQL('dojos_and_ninjas').query_db(query)
        dojos = []
        for dojo in results:
            dojos.append(cls(dojo))
        return dojos

    # ---------- Save New Dojo -----------
    @classmethod
    def save_new_dojo(cls, data ):
        query = "INSERT INTO dojos ( name , created_at, updated_at ) VALUES ( %(new_dojo_name)s , NOW() , NOW() );"
        return connectToMySQL('dojos_and_ninjas').query_db( query, data )

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
