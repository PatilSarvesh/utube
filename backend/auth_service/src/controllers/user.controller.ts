import type { Request, Response } from "express";
import { User } from "../models/user";
import type { AppUser } from "../utils/types.ts";
import axios from 'axios';
import { verifyAccessToken } from "../utils/firebase.ts";
import jwt from 'jsonwebtoken';

export const signIn = async (req: Request, res: Response) => {
    try {
        const { fullName, email, phoneNumber, token } = req.body;

        const verifiedEmail = await verifyAccessToken(token);
        if (email !== verifiedEmail) {
            return res.status(401).json({ error: "Invalid access token" });
        }

        let user = await User.findOne({ email });
        let id: string;
        if (!user) {
            const newUser: AppUser = {
                fullName,
                email,
                phoneNumber
            };
            user = await new User(newUser).save();
            id = user.id;
            await axios.post(`${process.env.USER_PROFILE_SERVICE!}/create-profile`, { ...newUser, id: user.id, createdOn: user.createdAt });
        } else {
            id = user.id!;
        }

        const appToken = jwt.sign({ id }, process.env.JWT_SECRET!);
        
        return res.status(200).json({ id, token: appToken });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to sign in" });
    }
};
