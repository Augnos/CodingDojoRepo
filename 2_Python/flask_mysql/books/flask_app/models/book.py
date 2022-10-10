from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import author


class Book:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        # list of the authors who has favorited this book
        self.authors_who_favorited = []

    # ---------- Get All Books-----------
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books;"
        results = connectToMySQL('books_schema').query_db(query)
        books = []
        for book in results:
            books.append(cls(book))
        return books

    # ---------- Get One Book-----------
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM books WHERE id = %(id)s;"
        results = connectToMySQL('books_schema').query_db(query, data)
        books = []
        for book in results:
            books.append(cls(book))
        return books

    # ---------- Get Favorite books-----------
    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM books LEFT JOIN favorites ON books.id = favorites.book_id LEFT JOIN authors ON authors.id = favorites.author_id WHERE books.id = %(id)s;"
        results = connectToMySQL('books_schema').query_db(query, data)
        book = cls(results[0])
        for row in results:
            if row['authors.id'] == None:
                break
            data = {
                "id": row['authors.id'],
                "name": row['name'],
                "created_at": row['authors.created_at'],
                "updated_at": row['authors.updated_at']
            }
            book.authors_who_favorited.append(author.Author(data))
        return book


    # ---------- Get Unfavorited Books -----------
    @classmethod
    def unfavorited_books(cls,data):
        query = "SELECT * FROM books WHERE books.id NOT IN ( SELECT book_id FROM favorites WHERE author_id = %(id)s );"
        results = connectToMySQL('books_schema').query_db(query,data)
        books = []
        for row in results:
            books.append(cls(row))
        print(books)
        return books


    # ---------- Insert New Book-----------
    @classmethod
    def insert_new_book(cls, data):
        query = "INSERT INTO books ( title , num_of_pages , created_at, updated_at ) VALUES ( %(title)s , %(num_of_pages)s , NOW() , NOW() );"
        return connectToMySQL('books_schema').query_db(query, data)


    # ---------- Update Book -----------
    @classmethod
    def update_book(cls, data):
        query = "UPDATE books SET updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL('books_schema').query_db(query, data)


    # ---------- Delete Book -----------
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM books WHERE id = %(id)s;"
        return connectToMySQL('books_schema').query_db(query, data)
