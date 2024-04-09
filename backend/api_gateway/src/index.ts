import express from 'express'
import {json} from 'body-parser'
import cors from 'cors';
import dotenv from 'dotenv';
import { router as redirectRoutes } from './routers/redirect.route';

dotenv.config();
const app = express();
const port = process.env.PORT! || 8003;

app.use(json());
app.use(cors());

app.use('/api', [redirectRoutes])

app.listen(port, ()=>{
    console.log(`🚀Server is running on port: ${port}🚀`)
})

