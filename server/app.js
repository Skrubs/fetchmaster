const express = require('express');
const cors = require('cors');
const pool = require('./db');
const {response} = require("express");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;


//middleware
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req, res)=>{
    res.send(`Server is running on ${port}`);
});

//EXAMPLE TESTING CAN REMOVE
app.get('/data', async(req, res)=>{
    try{



    }catch(err){
        console.log(err.message);
    }
})
