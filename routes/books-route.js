import express from "express";
import { createNewBook, listAllBooks } from "../controllers/booksController.js";
import validateNewPost from "../middleware/vaildateNewPost.js";
import sanitizeNewPost from "../middleware/sanitizeNewPost.js";

const router = express.Router();

router
  .route("/")
  .get(listAllBooks)
  .post(validateNewPost, sanitizeNewPost, createNewBook);

export default router;
