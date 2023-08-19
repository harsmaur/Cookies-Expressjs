import express from 'express';
import cookieParser from 'cookie-parser';
import web from './routes/web.js'
const app = express();
const port = process.env.PORT || '3000';

//use middleware
app.use(cookieParser());

//load the routes
app.use('/', web)

//listen to the port
app.listen(port, ()=>{
    console.log('Connection Success')
})