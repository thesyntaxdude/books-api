export default function errorHandler(error, req, res, next) {
  console.error(error.stack);
  if (req.headersSent) {
    next(error);
  }
  const message = error.isOperational
    ? error.message
    : "An unexpected error occured";
  const statusCode = error.statusCode || 500;
  res.status(statusCode).json({ message });
}
