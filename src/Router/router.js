const express = require('express')
const router = new express.Router();
const  teachervalid = require("../models/teacher");
const connection= require('./mongodb/connection');



//GET Request

router.get('/teachers',async(req, res) => {
    try{
        
        const teacherData = await teachervalid.find(); 
        console.log(teacherData);
   
        res.status(201).send(teacherData);
       }catch(err){
     res.status(400).send(err);
       }
});

//get individuals data(GET request)
router.get('/teachers/:id',async(req, res) => {
  try{
      
    const _id=req.params.id;
    const apidata = await teachervalid.findById({_id})
    console.log(apidata);
    res.send(apidata);
      //const  _id= await teachervalid.find({_id}); 
      //console.log(teacherData);
 
      //res.status(201).send(teacherData1);
     }catch(err){
   res.status(400).send(err);
     }
});

//Delete Data (DELETE Request)

router.delete('/teachers/:id',async(req, res) => {
  try{
      const _id=req.params.id;
      const teacherData = await teachervalid.findByIdAndDelete({_id}); 
      console.log(teacherData);
 
      res.status(201).send(teacherData);
     }catch(err){
   res.status(400).send(err);
     }
});

//PATCH REQUEST

router.patch('/teachers/:id',async(req, res) => {
  try{
      const _id=req.params.id;
      const teacherData = await teachervalid.findByIdAndUpdate(_id, req.body, {new:true}); 
      console.log(teacherData);
 
      res.status(201).send(teacherData);
     }catch(err){
   res.status(400).send(err);
     }
});

//PUT REQUEST


router.put('/teachers/:id',async(req, res) => {
  try{
      const _id=req.params.id;
      const updateData = await teachervalid.findByIdAndUpdate(_id, req.body,{new:true}); 
      console.log(updateData);
 
      res.status(201).send(updateData);
     }catch(err){
   res.status(400).send(err);
     }
});


router.post('/teachers', (req, res)=> {

        console.log(req.body);
        const user= new TeacherModel(req.body);
        user.save().then(() =>{res.status(201).send(user)})
        .catch((err) => {res.status(400).send(err)
        });

});


module.exports= router