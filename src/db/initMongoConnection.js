import mongoose from 'mongoose';


export const initMongoConnection = async (
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_URL,
  MONGODB_DB,
) => {
  try {
    const DB_HOST = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}`;
    await mongoose.connect(DB_HOST);
  } catch (error) {
    throw error;
  }
};
