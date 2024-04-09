import express from 'express';
import { signIn } from '../controllers/user.controller';

export const router = express.Router();

router.post('/sign-in', signIn);

