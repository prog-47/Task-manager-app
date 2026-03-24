import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import path from 'path';
import {fileURLToPath} from 'url'

import tasks from './routes/tasks.js'
import {notFound} from './middleware/not-Found.js'
import {errorHandler} from './middleware/error-handler.js';

dotenv.config({quiet : true});
const PORT = process.env.PORT || 8000;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const URI = `mongodb+srv://${DB_USER}:${DB_PASS}@backenddb.wx2di1e.mongodb.net/Task-manager?appName=BackendDb`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

    
const app = express();

//routes
app.use('/api/v1/tasks',tasks);

//middlewares
app.use(express.static(path.join(__dirname,'Public')));
app.use(express.json())
app.use(notFound);
app.use(errorHandler);


//html files
app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'Public','index.html'));
});

app.get('/task',(req,res)=>{
    res.sendFile(path.join(__dirname,'Public','task.html'));
});






mongoose.connect(URI)
 .then(()=>{
    console.log('connected to database');
    app.listen(PORT,()=>{
     console.log(`Server is running on port ${PORT}`)
    });
 })
 .catch((err) => {
    console.log(err);
 })
                 
                 

