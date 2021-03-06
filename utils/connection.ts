//IMPORT MONGOOSE
import mongoose from "mongoose";

// CONNECTING TO MONGOOSE (Get Database Url from .env)
const { DATABASE_URL } = process.env;

// connection function
export const connect = async () => {
  let conn: any;
  try {
    conn = await mongoose.connect(DATABASE_URL as string);
    console.log("Mongoose Connection Established");
  } catch (err) {
    console.log(err);
  }

  // OUR PROJECT SCHEMA
  const ProjectSchema = new mongoose.Schema({
    url: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    screenshots: [{ type: String }],
  });

  // OUR PROJECT MODEL
  const Project =
    mongoose.models.Project || mongoose.model("Project", ProjectSchema);

  return { conn, Project };
};
