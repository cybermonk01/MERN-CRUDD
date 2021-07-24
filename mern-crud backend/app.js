import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './route/routes.js';
import bodyParser from 'body-parser';


const app= express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/users", route);
const URL='mongodb+srv://admin:mongodb@1509@cluster0.jc8od.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = '9000'; 
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => { 
   
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})