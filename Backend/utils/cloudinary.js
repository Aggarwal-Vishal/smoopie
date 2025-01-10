import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const uploadMedia = async (file) => {
  try {
    const uploadResponse = cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
  } catch (error) {
    console.log(error);
  }
};
