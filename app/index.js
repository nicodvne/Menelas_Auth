import express from 'express'
import dotenv from 'dotenv'
import router from './routes/router.js'

import { setupMongoConnect } from './services/mongodbManager.js';
import './auth/auth.js';


const app = express();
app.use(express.json());


dotenv.config();

app.use(router);

setupMongoConnect();

const port = parseInt(process.env.PORT) || 8090;
app.listen(port, () => {
    console.log(`server started on ${port}`)
});