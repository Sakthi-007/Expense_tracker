const express=require('express')
const app=express()
const static=express.static("static")

app.use("/",static);

// app.get('/',(req,res)=>{
//     res.send('Hello World')
//     res.json({
//         name:"Sakthi Vignesh",
//     })
// })

app.listen(3400,()=>{
    console.log('Running successfull');
})