import express from 'express';
import { redirectToAuthService, redirectToUserProfileService } from '../controllers/redirect.controller';

export const router = express.Router();

router.post('/auth-service/:rest', redirectToAuthService);
router.post('/user-profile-service/:rest', redirectToUserProfileService);