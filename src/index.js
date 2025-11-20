import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';



initMongoConnection()
  .then(() => {
    console.log('Mongo connection successfully established!');
    setupServer();
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
