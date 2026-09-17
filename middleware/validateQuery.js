import AppError from "../utils/AppError.js";

export default function validateQueryData(req, res, next) {
  if (!req.query) {
    return next(new AppError("You need to pass in the search attributes", 400));
  }
  next();
}
