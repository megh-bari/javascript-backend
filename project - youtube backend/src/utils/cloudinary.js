import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';  

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) throw new Error("No file path provided.");

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // console.log("Response:", response);

    // console.log("File uploaded to Cloudinary:", response.url);
    try {
      await fs.unlinkSync(localFilePath);
      console.log(`File at ${localFilePath} was successfully deleted.`);
    } catch (error) {
      console.error(`Failed to delete file: ${error.message}`);
    }
    return response;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error.message);

    // Attempt to remove the local file if an error occurs
    try {
      await fs.unlink(localFilePath);
    } catch (unlinkError) {
      console.error("Error deleting local file:", unlinkError.message);
    }

    return null;
  }
};

export { uploadOnCloudinary };
