const mongoose= require('mongoose')
const validator= require("validator")

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        

    },
    
email: {
type: String,
required:true,
unique:[true,"Email Id already present"],
validate(value){
    if(!validator.isEmail(value)){
        throw new Error("Invalid Email")
    }
}
},
phone:{
    type:Number,
    required:true,
    uniquie:true,
    min:10,
},
address:{
    type:String,
    required:true,
}

});

//Create a new collection
const Teacher= new mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
