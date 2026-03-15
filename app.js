import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config({quiet : true});
const PORT = process.env.PORT || 8000;

const app = express();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

