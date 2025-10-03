import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  participants: [{ type: String, required: true }],
  lastMessage: { type: String },
  updatedAt: { type: Date, default: Date.now }
});

export const ConversationModel = mongoose.model('Conversation', conversationSchema);
