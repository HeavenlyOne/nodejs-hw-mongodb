import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import dotenv from 'dotenv';

dotenv.config();
const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_URL,
  MONGODB_DB,
} = process.env;


initMongoConnection(MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB)
  .then((PORT) => {
    setupServer(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
