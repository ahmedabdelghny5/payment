import express from 'express';
import { appRouter } from './module/index.routes.js'
const app = express();
import { config } from 'dotenv';
config()
const PORT = process.env.PORT 


appRouter(app)


app.listen(PORT, () => {
    console.log(`Express server listening on ${PORT}`);
});

