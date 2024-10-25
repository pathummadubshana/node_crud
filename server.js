const express = require('express');
const dotenv = require('dotenv');
const mysqlPoole = require('./config/db');

//config dotenv
dotenv.config();


//rest object
const app = express();

//middlware
app.use(express.json());


//routs
app.use('/api/student',require('./routes/studentRoutes'));
app.get('/test',(req,res)=>{
    res.status(200).send('<h1>pathum</h1>');
})

const PORT=process.env.PORT || 8000;

mysqlPoole
.query('SELECT 1')
.then(()=>{
    console.log('mysql db connected');
app.listen(PORT, ()=>{
    console.log(`Server Running on port ${process.env.PORT}`);
});
})
.catch((error)=>{
    console.log(error);

});