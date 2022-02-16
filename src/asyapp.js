const express = require('express');
const app = express();
const port=process.env.PORT || 5000;

const connection= require('./mongodb/connection');
const teachervalid = require("./models/teacher");
const RouterData= require("./Router/router");
app.use(express.json());
app.use(RouterData)



app.listen(port, ()=>{
    console.log(`connection is created successfully on this port ${port} number`);
});