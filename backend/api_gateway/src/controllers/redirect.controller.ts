import type { Request, Response } from 'express';
import axios from 'axios';
import { serviceStatus } from '../utils/healthchecker';

export const redirectToAuthService = async (req: Request, res: Response) => {
    if(serviceStatus['authService']){
        const restOfPath = req.params.rest;
        const targetUrl = `${process.env.AUTH_SERVICE!}/${restOfPath}`;
        await forwardRequest(req, res, targetUrl);
    }else{
        res.status(500).json({error: "Something went wrong. Please try again"})
    }    
}
export const redirectToUserProfileService = async (req: Request, res: Response) => {
    if(serviceStatus['userProfileService']){
        const restOfPath = req.params.rest;
        const targetUrl = `${process.env.USER_PROFILE_SERVICE!}/${restOfPath}`;
        await forwardRequest(req, res, targetUrl);
    }else{
        res.status(500).json({error: "Something went wrong. Please try again"})
    }    
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
    } catch (error:any) {
        console.error(error); 
        res.status(500).json(error.response.data); 
    }
}