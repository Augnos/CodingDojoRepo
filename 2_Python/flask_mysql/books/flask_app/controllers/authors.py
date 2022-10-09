from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.author import Author
from flask_app.models.book import Book


# -----------------------------------------------------
# -------------------- GET Routes ---------------------
# -----------------------------------------------------

# ---------- Home Page -----------
@app.route("/")
def index():
    return redirect('/authors')


# ---------- Authors (all) Page -----------
@app.route("/authors")
def authors_all():
    authors = Author.get_all()
    print(authors)
    return render_template("authors.html", all_authors=authors)


# ---------- Authors (one) Page -----------
@app.route("/authors/<int:id>")
def authors_one(id):
    data = {"id":id}

    authors = Author.get_one(data)
    print(authors)

    books = Book.get_by_id(data)
    print(books)
    return render_template("author_favs.html", all_authors=authors, all_books = books)


# ------------------------------------------------------
# -------------------- POST Routes ---------------------
# ------------------------------------------------------

# ---------- Insert New Author Post -----------
@app.route('/insert/author', methods=["POST"])
def insert_author():
    data = {
        "name": request.form["name"],
    }
    Author.insert_new_author(data)
    return redirect('/')


# ---------- Update Author Post -----------
@app.route('/authors/<id>/update', methods=["POST"])
def edit_author(id):
    data = {
        "id": id,
        "name": request.form["name"],
    }
    Author.update_author(data)
    return redirect('/')


# ---------- Delete Author Post -----------
@app.route('/authors/<id>/delete')
def delete_author(id):

    data = {"id": id}
    Author.delete(data)
    return redirect('/')
