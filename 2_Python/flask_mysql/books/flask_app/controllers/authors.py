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
def authors():
    authors = Author.get_all()
    print(authors)
    return render_template("authors.html", all_authors=authors)


# ---------- Authors (one) Page -----------
@app.route("/authors/<int:id>")
def show_author(id):
    data = {"id": id}
    return render_template("show_author.html", author=Author.get_by_id(data), unfavorited_books=Book.unfavorited_books(data))


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


# ---------- Join Book To Authors Favorites -----------
@app.route('/join/book', methods=['POST'])
def join_book():
    data = {
        'author_id': request.form['author_id'],
        'book_id': request.form['book_id']
    }
    Author.add_favorite(data)
    return redirect(f"/authors/{request.form['author_id']}")
