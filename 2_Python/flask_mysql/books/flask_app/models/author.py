from flask_app.config.mysqlconnection import connectToMySQL


class Author:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # ---------- Get All Authors-----------
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM authors;"
        results = connectToMySQL('books').query_db(query)
        authors = []
        for author in results:
            authors.append(cls(author))
        return authors

    # ---------- Get One Author-----------
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM authors WHERE id = %(id)s;"
        results = connectToMySQL('books').query_db(query, data)
        authors = []
        for author in results:
            authors.append(cls(author))
        return authors
    
    # ---------- Get Favorites-----------
    @classmethod
    def get_fav(cls, data):
        query = "SELECT authors.name as 'favorited_by', books.title as 'title', books.num_of_pages as 'num_of_pages' FROM favorites LEFT JOIN authors ON authors.id = favorites.author_id LEFT JOIN books ON books.id = favorites.book_id WHERE authors.id = %(id)s;"
        results = connectToMySQL('books').query_db(query, data)
        authors = []
        for author in results:
            authors.append(cls(author))
        return authors

    # ---------- Insert New Author-----------
    @classmethod
    def insert_new_author(cls, data):
        query = "INSERT INTO authors ( name , created_at, updated_at ) VALUES ( %(name)s , NOW() , NOW() );"
        return connectToMySQL('books').query_db(query, data)

    # ---------- Update Author -----------
    @classmethod
    def update_author(cls, data):
        query = "UPDATE authors SET updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('books').query_db(query, data)

    # ---------- Delete Author -----------
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM authors WHERE id = %(id)s;"
        return connectToMySQL('books').query_db(query, data)