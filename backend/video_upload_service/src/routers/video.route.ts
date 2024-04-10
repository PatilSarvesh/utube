import express from 'express';
import { uploadVideo } from '../controllers/video.controller';

export const router = express.Router();

router.post('/upload', uploadVideo)
