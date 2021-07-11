import express from 'express';
import { APP_PORT , DB_URL} from './config/index.js';
import errorHandler from './middlewares/errorHandler.js';
const app=express();
import routes from './routes';
import mongoose from 'mongoose';
import path from 'path';

//Database Connection
mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error: '));
db.once('open',()=>{
    console.log('DB connected...');
})
global.appRoot=path.resolve(__dirname);
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api',routes);


app.use(errorHandler);
app.listen(5000,()=>console.log(`listening on port ${APP_PORT}`));