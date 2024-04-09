import { Schema, model } from 'mongoose';

interface IUser {
    fullName: string;
    email: string;
    phoneNumber: string;
  }
  
  const userSchema = new Schema<IUser>({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: String
  }, {timestamps: true});
  
  export const User = model<IUser>('User', userSchema);