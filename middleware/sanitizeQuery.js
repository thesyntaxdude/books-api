import AppError from "../utils/AppError.js";

export default function (req, res, next) {
  const fields = ["title", "author", "genre", "year"];

  for (const field of fields) {
    let value = req.query[field];
    if (value !== undefined) {
      if (typeof value !== "string") {
        return next(
          new AppError(
            `Invalid format for ${field}. Expected a plain string.`,
            400,
          ),
        );
      }

      const sanitizedValue = value.trim();

      if (sanitizedValue.length < 1) {
        return next(
          new AppError(`Invalid ${field} value. Field cannot be empty.`, 400),
        );
      }
      if (field === "year") {
        const parsedYear = parseInt(sanitizedValue, 10);
        if (isNaN(parsedYear) || sanitizedValue.length !== 4) {
          return next(
            new AppError(
              "Invalid Year value. Must be a valid 4-digit number.",
              400,
            ),
          );
        }
        req.query.year = parsedYear;
      } else {
        req.query[field] = sanitizedValue;
      }
    }
  }
  next();
}
