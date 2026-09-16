import { create, getAll } from "../services/booksService.js";

export async function listAllBooks(req, res, next) {
  res.json(await getAll());
}

export async function createNewBook(req, res, next) {
  const { title, author, year, genre } = req.body;
  const book = await create(title, author, year, genre);
  res.status(201).json(book);
}
