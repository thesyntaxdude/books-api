import { v4 as uuidv4 } from "uuid";

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
    resolve(books);
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
