import { Schema, model } from 'mongoose';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const phoneRegexp = /^\d{3}-\d{3}-\d{4}$/;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
      type: String,
      // match: phoneRegexp,
      required: true,

  },
  email: {
      type: String,
      match: emailRegex,
  },
  isFavourite: {
    type: Boolean,
    default: false,
  },
  contactType: {
    type: String,
    enum: ['work', 'home', 'personal'],
    required: true,
    default: 'personal',
  },
}, {timestamps: true, versionKey: false});

export const Contact = model('contact', contactSchema);
