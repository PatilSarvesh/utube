import type { Request, Response } from "express";
import { prisma } from "../utils/prisma.util";

export const uploadVideo = async(req: Request, res:Response)=>{
    try {
        const {title, description, url, thumbnailUrl, category, userId} = req.body;
        const video = await prisma.video.create({
            data:{
                title,
                description,
                url,
                thumbnailUrl,
                category,
                userId
            }
        })
        res.status(201).json({video})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Failed to upload video"})
    }
}