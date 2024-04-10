import type { Request, Response } from "express";
import { prisma } from "../utils/prisma.util";
import axios from 'axios';
import type { Video } from "@prisma/client";

export const uploadVideo = async(req: Request, res:Response)=>{
    try {
        const {title, description, url, thumbnailUrl, category, userId} = req.body;
        const video: Video = await prisma.video.create({
            data:{
                title,
                description,
                url,
                thumbnailUrl,
                category,
                userId
            }
        })
        let videoId = video.id
        await axios.post(`${process.env.USER_PROFILE_SERVICE!}/add-to-my-video`, {videoId, userId}).then((data)=> console.log(data)).catch(e => console.log(e));
        res.status(201).json({video})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Failed to upload video"})
    }
}