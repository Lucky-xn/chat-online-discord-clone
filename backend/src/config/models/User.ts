import { Schema, model, Document, ObjectId } from 'mongoose';

export interface IUser extends Document {
  _id: ObjectId;
  username: string;
  email: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export const UserModel = model<IUser>('User', userSchema);
