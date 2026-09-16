import AppError from "../utils/AppError.js";

export default function validateNewPost(req, res, next) {
  if (!req.body) {
    return next(new AppError("You need to pass in the book data", 400));
  }
  if (
    !req.body.title ||
    !req.body.author ||
    !req.body.year ||
    !req.body.genre
  ) {
    return next(new AppError("All fields are required", 400));
  }
  next();
}
