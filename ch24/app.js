
import express from 'express';
import session from 'express-session';
import web from './routes/web.js'
const app = express();
const port = process.env.PORT || '3000';

//use middleware
//session
app.use(session({
    secret: 'iamkey',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 200000}
}))

//load the routes
app.use('/', web)

//listen to the port
app.listen(port, ()=>{
    console.log('Connection Success')
})