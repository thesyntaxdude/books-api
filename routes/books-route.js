import express from "express";
import {
  createNewBook,
  listABook,
  listAllBooks,
  removeBook,
  updateBook,
} from "../controllers/booksController.js";
import validateNewPost from "../middleware/vaildateNewPost.js";
import sanitizeNewPost from "../middleware/sanitizeNewPost.js";
import validateUpdate from "../middleware/validateUpdate.js";
import sanitizeUpdate from "../middleware/sanitizeUpdate.js";

const router = express.Router();

router
  .route("/")
  .get(listAllBooks)
  .post(validateNewPost, sanitizeNewPost, createNewBook);

router
  .route("/:id")
  .get(listABook)
  .put(validateUpdate, sanitizeUpdate, updateBook)
  .delete(removeBook);
export default router;
