const express = require('express')
const app = express();
const path = require('path');
const PORT= process.env.PORT || 3000;

//Global middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve('./public')))

//views setup.....
app.set("view engine","pug")
app.set("views",path.resolve('./views'))

//Import routes
const homeRoute = require('./routes/home');


//Routes...
app.get("/",homeRoute);



//Listen to Server
 app.listen(PORT,(err)=>{
        if(err) throw err;
        console.log(`Server is started at port ${PORT}`)
    })

