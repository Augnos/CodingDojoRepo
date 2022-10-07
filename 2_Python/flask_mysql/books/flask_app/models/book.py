from flask_app.config.mysqlconnection import connectToMySQL


class Book:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # ---------- Get All Books-----------
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books;"
        results = connectToMySQL('books').query_db(query)
        books = []
        for book in results:
            books.append(cls(book))
        return books

    # ---------- Get One Book-----------
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM books WHERE id = %(id)s;"
        results = connectToMySQL('books').query_db(query, data)
        books = []
        for book in results:
            books.append(cls(book))
        return books

    # ---------- Get Favorite books-----------
    @classmethod
    def get_fav(cls, data):
        query = "SELECT authors.name as 'favorited_by', books.title as 'title', books.num_of_pages as 'num_of_pages' FROM favorites LEFT JOIN authors ON authors.id = favorites.author_id LEFT JOIN books ON books.id = favorites.book_id WHERE authors.id = %(id)s;"
        results = connectToMySQL('books').query_db(query, data)
        authors = []
        for author in results:
            authors.append(cls(author))
        return authors

    # ---------- Insert New Book-----------
    @classmethod
    def insert_new_book(cls, data):
        query = "INSERT INTO books ( title , num_of_pages , created_at, updated_at ) VALUES ( %(title)s , %(num_of_pages)s , NOW() , NOW() );"
        return connectToMySQL('books').query_db(query, data)

    # ---------- Update Book -----------
    @classmethod
    def update_book(cls, data):
        query = "UPDATE books SET updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('books').query_db(query, data)

    # ---------- Delete Book -----------
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM books WHERE id = %(id)s;"
        return connectToMySQL('books').query_db(query, data)