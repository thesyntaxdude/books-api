import AppError from "../utils/AppError.js";

const config = {
  node_env: process.env.NODE_ENV || "development",
  server_port: Number(process.env.PORT) || 3000,
  mongoDB_URI: process.env.MONGODB_URI,
};

if (!config.mongoDB_URI) {
  throw new AppError(`mongoDB_URI is required`);
}

export default config;
