import express from 'express';
import type {Request, Response} from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response)=>{
    res.send("Hello from server");
})

app.listen(port, ()=>{
    console.log(`🚀Server is running on port: ${port}🚀`)
})