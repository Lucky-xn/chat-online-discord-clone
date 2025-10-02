import { Schema, model, Document } from 'mongoose';

export interface IConversation extends Document {
  participants: string[];
  lastMessage?: string;
  updatedAt: Date;
}

const conversationSchema = new Schema<IConversation>({
  participants: [{ type: String, required: true }],
  lastMessage: { type: String },
  updatedAt: { type: Date, default: Date.now }
});

export const ConversationModel = model<IConversation>('Conversation', conversationSchema);
