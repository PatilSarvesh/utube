import express from 'express';
import type {Request, Response} from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './utils/database';

const app = express();
dotenv.config();

await connectToDatabase();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response)=>{
    res.send("Hello from server");
})

app.listen(port, ()=>{
    console.log(`🚀Server is running on port: ${port}🚀`)
})