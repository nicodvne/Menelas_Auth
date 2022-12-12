const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res)=>{
    res.send('Welcome on template main page')
});

const appRouter = require('./routes/router.js');

const port = parseInt(process.env.PORT) || 80;
app.listen(port, () => {
    console.log(`server started on ${port}`)
});