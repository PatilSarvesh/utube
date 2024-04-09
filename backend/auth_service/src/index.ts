import express from 'express';
import {json} from 'body-parser'
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDatabase } from './utils/database';
import { router as userRouter } from './routers/user.router';

const app = express();
dotenv.config();

await connectToDatabase();
const port = process.env.PORT || 8000;

app.use(json());
app.use(cors());

app.use('/api', [userRouter])

app.listen(port, ()=>{
    console.log(`🚀Server is running on port: ${port}🚀`)
})