import express from "express";
import http from "http";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from "mongoose";


import router from './router/index';
// import WebSocket from "ws";

const app = express();

app.use(cors({
   credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);


server.listen('3030', () => {
   console.log(`Servidor rodando em http://localhost:3030`);
});

const MONGO_URL = 'mongodb+srv://Lucky:Lucky@lucky.upiat22.mongodb.net/?retryWrites=true&w=majority&appName=Lucky';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('connection', () => console.log('oi'))
mongoose.connection.on('erro', (error: Error) => console.log(error))

app.use('/', router())
