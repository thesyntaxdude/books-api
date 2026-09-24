import Book from "../models/bookModel.js";
import AppError from "../utils/AppError.js";

export async function getAll() {
  return await Book.find({ isDeleted: false });
}

export async function create(title, author, year, genre) {
  const book = {
    title,
    author,
    year,
    genre,
  };
  return await Book.create(book);
}

export async function listBook(id) {
  const book = await Book.findOne({ _id: id, isDeleted: false });
  if (!book) {
    throw new AppError(`book with id: ${id} not found`, 404);
  }
  return book;
}

export async function update(id, title, author, year, genre) {
  const book = await listBook(id);
  const updatedBook = {
    title: title || book.title,
    author: author || book.author,
    year: year || book.year,
    genre: genre || book.genre,
  };
  await Book.updateOne({ _id: id }, updatedBook);
  return await listBook(id);
}

export async function remove(id) {
  const book = await listBook(id);
  book.isDeleted = true;
  book.deletedAt = new Date();
  await book.save();
  return { message: `book with id: ${id} has been deleted succesfully` };
}

export async function search(title, author, year, genre) {
  const filter = { isDeleted: false };
  if (title) filter.title = { $regex: title, $options: "i" };
  if (author) filter.author = { $regex: author, $options: "i" };
  if (genre) filter.genre = genre;
  if (year != undefined) filter.year = year;
  return Book.find(filter);
}
