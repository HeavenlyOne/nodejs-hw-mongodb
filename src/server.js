import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import dotenv from 'dotenv';
import { getAllContacts, getContactById } from './services/contacts.js';

dotenv.config();

const { PORT = 3000 } = process.env;

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

    app.use(
      pino({
        transport: {
          target: 'pino-pretty',
        },
      }),
    );
  app.get('/', () => {
    console.log('hello');
  });
  app.get('/api/contacts', getAllContacts);
  app.get('/api/contacts/:id', getContactById);

  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });
  app.use((err, req, res, next) => {
    const { status = 500, message = 'Sever error' } = err;
    res.status(status).json({
      message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

// const http = require('http');
// const server = http.createServer((req, res) => {});
