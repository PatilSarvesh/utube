import express from 'express';
import {json} from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as videoRouter } from './routers/video.route';

dotenv.config();
const app = express();
const port = process.env.PORT! || 8004;

app.use(json());
app.use(cors());

app.use('/api/video-upload-service', [videoRouter])

app.listen(port, ()=>{
    console.log(`🚀Server is running on port: ${port}🚀`)
})