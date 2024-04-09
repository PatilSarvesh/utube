import type { Request, Response } from 'express';
import axios from 'axios';

export const redirectToAuthService = async (req: Request, res: Response) => {
    const restOfPath = req.params.rest;
    const targetUrl = `${process.env.AUTH_SERVICE!}/${restOfPath}`;
    await forwardRequest(req, res, targetUrl);
}
export const redirectToUserProfileService = async (req: Request, res: Response) => {
    const restOfPath = req.params.rest;
    const targetUrl = `${process.env.USER_PROFILE_SERVICE!}/${restOfPath}`;
    await forwardRequest(req, res, targetUrl);
}

const forwardRequest = async(req: Request, res: Response, targetUrl: string)=>{
    try {
        const response = await axios.request({
            method: req.method,
            url: targetUrl,
            headers: req.headers, 
            data: req.body 
        });
        res.status(response.status).send(response.data); 
    } catch (error) {
        console.error(error); 
        res.status(500).send("Error forwarding request"); 
    }
}