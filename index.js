const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/',(req, res)=>{
    res.json({
        message: 'welcome to server'
    })
})

const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})