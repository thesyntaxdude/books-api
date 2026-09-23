import AppError from "../utils/AppError.js";

export default function sanitizeNewPost(req, res, next) {
  const title = req.body.title.trim();
  const author = req.body.author.trim();
  const year = req.body.year.toString().trim();

  if (title.length < 1 || author.length < 1 || year.length !== 4) {
    return next(
      new AppError(
        "Please double check all fields. Min.Length is 1 for all fields except for year which is 4",
        400,
      ),
    );
  }
  req.body.title = title;
  req.body.author = author;
  req.body.year = parseInt(year);
  next();
}
