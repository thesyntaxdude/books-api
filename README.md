# PLAN FOR BOOKS API

## What's the project about in a sentence?

> It's an API that let's users create, read, update and delete books; they can
> search for books by title, genre, author and year published.

## Features:

- CRUD for books (title, author, year, genre)
- Filtering via query params: ?genre=fiction&year=2020
- Validation
- Professional structure and error handling
- Simple search by title (?search=...)

## Endpoints

| METHOD | ENDPOINT      | USE                                   |
| ------ | ------------- | ------------------------------------- |
| GET    | /books        | list all books                        |
| POST   | /books        | create a book                         |
| GET    | /books/:id    | get a book by id                      |
| PUT    | /books/:id    | update a book                         |
| DELETE | /books/:id    | delete a book                         |
| GET    | /books/filter | filter books by genre / year / author |
| GET    | /books/search | search books by title                 |

## Book Shape

All books have this structure:

```js
book {
 id: uuid,
 title: book title,
 author: book author,
 year: year published,
 genre: book genre,
 createdAt: current time
}

```
