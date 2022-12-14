from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.book import Book
from flask_app.models.author import Author


# -----------------------------------------------------
# -------------------- GET Routes ---------------------
# -----------------------------------------------------

# # ---------- Home Page -----------
# @app.route("/")
# def index():
#     return redirect('/books')


# ---------- Books (all) Page -----------
@app.route("/books")
def books_all():
    books = Book.get_all()
    print(books)
    return render_template("books.html", all_books=books)


# ---------- Books (one) Page -----------
@app.route('/books/<int:id>')
def show_book(id):
    data = {"id": id}
    return render_template('show_book.html', book=Book.get_by_id(data), unfavorited_authors=Author.unfavorited_authors(data))


# ------------------------------------------------------
# -------------------- POST Routes ---------------------
# ------------------------------------------------------

# ---------- Insert New Book Post -----------
@app.route('/insert/book', methods=["POST"])
def insert_book():
    data = {
        "title": request.form["title"],
        "num_of_pages": request.form["num_of_pages"],
    }
    Book.insert_new_book(data)
    return redirect('/books')


# ---------- Update Book Post -----------
@app.route('/books/<id>/update', methods=["POST"])
def edit_book(id):
    data = {
        "id": id,
        "title": request.form["title"],
    }
    Book.update_book(data)
    return redirect('/')


# ---------- Delete Book Post -----------
@app.route('/books/<id>/delete')
def delete_book(id):

    data = {"id": id}
    Book.delete(data)
    return redirect('/')


# ---------- Join Author to Book's Favorited -----------
@app.route('/join/author',methods=['POST'])
def join_author():
    data = {
        'author_id': request.form['author_id'],
        'book_id': request.form['book_id']
    }
    Author.add_favorite(data)
    return redirect(f"/books/{request.form['book_id']}")
