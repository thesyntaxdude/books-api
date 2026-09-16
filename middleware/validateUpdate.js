import AppError from "../utils/AppError.js";

export default function validateUpdateData(req, res, next) {
  if (!req.body) {
    return next(new AppError("You need to pass in the book data", 400));
  }
  next();
}
