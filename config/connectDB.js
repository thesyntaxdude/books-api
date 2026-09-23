import mongoose from "mongoose";
import config from "./config.js";

export default async function connectDB() {
  try {
    await mongoose.connect(config.mongoDB_URI);
    console.log(`db connected successfuly`);
  } catch (error) {
    console.error(`db connection failed`, error);
    process.exit(1);
  }
}
