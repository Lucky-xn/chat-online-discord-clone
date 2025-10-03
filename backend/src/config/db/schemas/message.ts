import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  text: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
  isViewed: { type: Boolean, default: false }
});

export const MessageModel = mongoose.model('Message', messageSchema);
