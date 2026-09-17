import { v4 as uuidv4 } from "uuid";
import AppError from "../utils/AppError.js";

const books = [
  {
    id: "uuid",
    title: "book title",
    author: "book author",
    year: "year published",
    genre: "book genre",
    createdAt: "current time",
  },
  {
    id: "uuid2",
    title: "book title 2",
    author: "book author 2",
    year: "year published 2",
    genre: "book genre 2",
    createdAt: "current time 2",
  },
];

export function getAll() {
  return new Promise((resolve, reject) => {
    const activeBooks = [];
    books.forEach((book) => {
      if (!book.deleted) {
        activeBooks.push(book);
      }
    });
    resolve(activeBooks);
  });
}

export function create(title, author, year, genre) {
  return new Promise((resolve, reject) => {
    const Book = {
      id: uuidv4(),
      title,
      author,
      year,
      genre,
      createdAt: new Date().toLocaleString(),
    };
    books.push(Book);
    resolve(Book);
  });
}

export function listBook(id) {
  return new Promise((resolve, reject) => {
    const book = books.find((b) => b.id === id);
    if (!book || book.deleted) {
      return reject(new AppError(`book with id: ${id} not found`, 404));
    }
    resolve(book);
  });
}

export function update(id, title, author, year, genre) {
  return new Promise(async (resolve, reject) => {
    const book = await listBook(id);
    const index = books.indexOf(book);
    const updatedBook = {
      id: book.id,
      title: title || book.title,
      author: author || book.author,
      year: year || book.year,
      genre: genre || book.genre,
      createdAt: book.createdAt,
    };
    books.splice(index, 1, updatedBook);
    resolve(updatedBook);
  });
}

export function remove(id) {
  return new Promise(async (resolve, reject) => {
    const book = await listBook(id);
    book.deleted = "true";
    resolve(book);
  });
}

export function search(title, author, year, genre) {
  return new Promise((resolve, reject) => {
    if (books.length > 0) {
      const filtered = books.filter((book) => {
        const matchesTitle = !title || book.title.includes(title);
        const matchesAuthor = !author || book.author.includes(author);
        const matchesGenre = !genre || book.genre.includes(genre);
        const matchesYear = !year || book.year === year;

        return matchesTitle && matchesAuthor && matchesGenre && matchesYear;
      });
      resolve(filtered);
    }
  });
}
