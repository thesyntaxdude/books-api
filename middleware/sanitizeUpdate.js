import AppError from "../utils/AppError.js";

export default function (req, res, next) {
  const title = req.body.title;
  const author = req.body.author;
  const year = req.body.year;
  const genre = req.body.genre;

  if (title) {
    const sanitizedTitle = title.trim();
    if (sanitizedTitle.length > 3) {
      req.body.title = sanitizedTitle;
    } else {
      next(new AppError("Invalid Title value. Check and try again", 400));
    }
  }
  if (author) {
    const sanitizedAuthor = author.trim();
    if (sanitizedAuthor.length > 3) {
      req.body.author = sanitizedAuthor;
    } else {
      next(new AppError("Invalid Author value. Check and try again", 400));
    }
  }
  if (year) {
    const sanitizedYear = year.toString().trim();
    if (sanitizedYear.length > 3) {
      req.body.year = parseInt(sanitizedYear);
    } else {
      next(new AppError("Invalid Year value. Check and try again", 400));
    }
  }
  if (genre) {
    const sanitizedGenre = genre.trim();
    if (sanitizedGenre.length > 3) {
      req.body.genre = sanitizedGenre;
    } else {
      next(new AppError("Invalid Genre value. Check and try again", 400));
    }
  }
  next();
}
