import {
  create,
  getAll,
  listBook,
  remove,
  update,
} from "../services/booksService.js";

export async function listAllBooks(req, res, next) {
  res.json(await getAll());
}

export async function createNewBook(req, res, next) {
  const { title, author, year, genre } = req.body;
  const book = await create(title, author, year, genre);
  res.status(201).json(book);
}

export async function listABook(req, res, next) {
  const { id } = req.params;
  const book = await listBook(id);
  res.json(book);
}

export async function updateBook(req, res, next) {
  const { title, author, year, genre } = req.body;
  const { id } = req.params;
  const updatedBook = await update(id, title, author, year, genre);
  res.json(updatedBook);
}

export async function removeBook(req, res, next) {
  const { id } = req.params;
  const deletedBook = await remove(id);
  res.json(deletedBook);
}
