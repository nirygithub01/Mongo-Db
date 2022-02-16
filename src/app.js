const express = require("express")
const app = express();

const mongodb=require("./mongodb/connection");

const TeacherModel= require("./models/teacher")


const port = process.env.PORT || 8000;


app.use(express.json());
//app.use(express.urlencoded());

/** 
app.get('/', (req, res) =>{
    res.send("Hello from the other sideb by rky.");
});
*/

app.post('/teacher', (req, res) => {
    console.log(req.body);
    const user= new TeacherModel(req.body);
    user.save().then(() =>{res.status(201).send(user)})
    .catch((err) => {res.status(400).send(err)
    });
});

app.get('/student', (req, res) =>{
    res.send("Hello from the other side.");
});

app.listen(port, ()=> {
    console.log(`connection is setup at this port ${port} number`)
})