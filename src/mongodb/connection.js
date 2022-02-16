const mongoose= require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/students-api")
.then(()=>{
    console.log("connection is created successfully...")
})
.catch((err)=> {console.log(err)
});


