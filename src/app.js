import express from 'express';
import { Router } from 'express'
import bodyParser from 'body-parser';
import addContact from './api/addContact';
import mongoose from 'mongoose';
import config from '../config';
import cors from 'cors';
const router = Router();
const app = express();
app.use(cors());
const port = config.port;
console.log("*************");
mongoose.connect('mongodb://localhost:27017/contactApp', { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api/addContact', addContact);

app.listen(port, function () {
    console.log(port);
})
