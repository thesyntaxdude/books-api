import { v4 as uuidv4 } from "uuid";
import Book from "../models/bookModel.js";
import AppError from "../utils/AppError.js";

const books = [
  {
    id: "uuid",
    title: "book title",
    author: "book author",
    year: 2000,
    genre: "book genre",
    createdAt: "current time",
  },
  {
    id: "uuid2",
    title: "book title 2",
    author: "book author 2",
    year: 1485,
    genre: "book genre 2",
    createdAt: "current time 2",
  },
];

export async function getAll() {
  return await Book.find({ isDeleted: false });
}

export async function create(title, author, year, genre) {
  const book = new Book({
    title,
    author,
    year,
    genre,
  });
  return await Book.create(book);
}

export async function listBook(id) {
  const book = await Book.findOne({ _id: id, isDeleted: false });
  if (!book) {
    throw new AppError(`book with id: ${id} not found`);
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
  book.save();
  return { message: `book with id: ${id} has been deleted succesfully` };
}

export function search(title, author, year, genre) {
  return new Promise((resolve, reject) => {
    if (books.length > 0) {
      const filtered = books.filter((book) => {
        if (!book.deleted) {
          const matchesTitle = !title || book.title.includes(title);
          const matchesAuthor = !author || book.author.includes(author);
          const matchesGenre = !genre || book.genre.includes(genre);
          const matchesYear = !year || book.year === year;

          return matchesTitle && matchesAuthor && matchesGenre && matchesYear;
        }
      });
      return resolve(filtered);
    }
    resolve([]);
  });
}
