import AppError from "../utils/AppError.js";

export default function sanitizeNewPost(req, res, next) {
  const title = req.body.title.trim();
  const author = req.body.author.trim();
  const year = req.body.year.toString().trim();
  const genre = req.body.genre.trim();

  if (
    title.length < 3 ||
    author.length < 3 ||
    year.length !== 4 ||
    genre.length < 3
  ) {
    return next(
      new AppError(
        "Please double check all fields. Min.Length is 3 for all fields except for year which is 4",
        400,
      ),
    );
  }
  req.body.title = title;
  req.body.author = author;
  req.body.genre = genre;
  req.body.year = parseInt(year);
  next();
}
