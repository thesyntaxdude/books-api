import AppError from "../utils/AppError.js";

export default function (req, res, next) {
  const title = req.body.title;
  const author = req.body.author;
  const year = req.body.year;

  if (title) {
    const sanitizedTitle = title.trim();
    if (sanitizedTitle.length > 1) {
      req.body.title = sanitizedTitle;
    } else {
      return next(
        new AppError("Invalid Title value. Check and try again", 400),
      );
    }
  }
  if (author) {
    const sanitizedAuthor = author.trim();
    if (sanitizedAuthor.length > 1) {
      req.body.author = sanitizedAuthor;
    } else {
      return next(
        new AppError("Invalid Author value. Check and try again", 400),
      );
    }
  }
  if (year) {
    const sanitizedYear = year.toString().trim();
    if (sanitizedYear.length === 4) {
      req.body.year = parseInt(sanitizedYear);
    } else {
      return next(new AppError("Invalid Year value. Check and try again", 400));
    }
  }
  next();
}
