import express from 'express';
import axios from 'axios';

export const router = express.Router();

router.post('/auth-service/:rest', async (req, res) => {
    const restOfPath = req.params.rest;
    const targetUrl = `${process.env.AUTH_SERVICE!}/${restOfPath}`;
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
});