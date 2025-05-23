import {V2 as cloudinary} from "cloudinary";
import { log } from "console";
import fs from "fs";

 cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: CLOUDINARY_API_SECRET 
        });


        const cloudinaryUpload = async (localPath)=>{
            try {
                if(!localPath) return null;
                //upload the fle to cloudinary
             const response = await cloudinary.uploader.upload(localPath,{
                    resource_type : "auto"

                });
                console.log("file is uploaded to cloudinary",response.url);
                return response;
            } catch (error) {
                fs.unlink(localPath);
                return null;
            }
        }