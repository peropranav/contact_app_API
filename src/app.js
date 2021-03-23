import express from 'express';
import { Router } from 'express'
import contact from './api';
import mongoose from 'mongoose';
import config from '../config';
import bodyParser from 'body-parser';
import cors from 'cors';
const router = Router();
const app = express();
app.use(cors());
console.log("*************");  
console.log(process.env, process.env.TWILIO_ACCOUNT_SID);
// parse application/json
app.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/contactApp', { useNewUrlParser: true }).catch(err=>{
    console.log(err);
})
app.use('/api', contact);

app.listen(config.port, function () {
    console.log(config.port);
})
