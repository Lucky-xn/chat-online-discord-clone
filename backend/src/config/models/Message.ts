import { Schema, model, Document } from 'mongoose';

import { Types } from 'mongoose';

export interface IMessage extends Document {
  conversationId: Types.ObjectId;
  sender: string;
  text: string;
  sentAt: Date;
  isViewed: boolean;
}

const messageSchema = new Schema<IMessage>({
  conversationId: { type: Schema.Types.ObjectId, ref: 'Conversation', required: true },
  sender: { type: String, required: true },
  text: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
  isViewed: { type: Boolean, default: false }
});

export const MessageModel = model<IMessage>('Message', messageSchema);
