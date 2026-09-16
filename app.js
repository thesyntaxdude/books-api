import express from "express";
import booksRouter from "./routes/books-route.js";
import AppError from "./utils/AppError.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use("/books", booksRouter);
app.use((req, res, next) => {
  next(new AppError("route not found", 404));
});
app.use(errorHandler);

export default app;
