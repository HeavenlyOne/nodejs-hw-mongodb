import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_URL,
  MONGODB_DB,
} = process.env;


export const initMongoConnection = async () => {
    const DB_HOST = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}`;
    await mongoose.connect(DB_HOST);

};
