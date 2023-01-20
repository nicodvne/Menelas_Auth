import express from 'express'
import dotenv from 'dotenv'
import router from './routes/router.js'

import { setupMongoConnect } from './services/mongodbManager.js';
import './auth/auth.js';


const app = express();
app.use(express.json());

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, X-Auth-Token"
    );
    next();
});

dotenv.config();

app.use(router);

setupMongoConnect();

const port = parseInt(process.env.PORT) || 8090;
app.listen(port, () => {
    console.log(`server started on ${port}`)
});