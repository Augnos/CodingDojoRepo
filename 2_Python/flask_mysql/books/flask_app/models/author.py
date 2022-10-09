from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import book


class Author:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        # list of the books favorited by the author
        self.favorite_books = []

    # ---------- Get All Authors-----------
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM authors;"
        results = connectToMySQL('books_schema').query_db(query)
        authors = []
        for author in results:
            authors.append(cls(author))
        return authors

    # ---------- Get One Author-----------
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM authors WHERE id = %(id)s;"
        results = connectToMySQL('books_schema').query_db(query, data)
        authors = []
        for author in results:
            authors.append(cls(author))
        return authors
    
    # ---------- Get Favorites-----------
    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM authors LEFT JOIN favorites ON authors.id = favorites.author_id LEFT JOIN books ON books.id = favorites.book_id WHERE authors.id = %(id)s;"
        results = connectToMySQL('books_schema').query_db(query,data)

        # Creates instance of author object from row one
        author = cls(results[0])
        # append all book objects to the instances favorites list.
        for row in results:
            # if there are no favorites
            if row['books.id'] == None:
                break
            # common column names come back with specific tables attached
            data = {
                "id": row['books.id'],
                "title": row['title'],
                "num_of_pages": row['num_of_pages'],
                "created_at": row['books.created_at'],
                "updated_at": row['books.updated_at']
            }
            author.favorite_books.append(book.Book(data))
        return author

    # ---------- Insert New Author-----------
    @classmethod
    def insert_new_author(cls, data):
        query = "INSERT INTO authors ( name , created_at, updated_at ) VALUES ( %(name)s , NOW() , NOW() );"
        return connectToMySQL('books_schema').query_db(query, data)

    # ---------- Update Author -----------
    @classmethod
    def update_author(cls, data):
        query = "UPDATE authors SET updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('books_schema').query_db(query, data)

    # ---------- Delete Author -----------
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM authors WHERE id = %(id)s;"
        return connectToMySQL('books_schema').query_db(query, data)