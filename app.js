const express = require('express')

const app = express()

app.get("/" , (req , res)=>{
    res.json({
        xData : new Date(),
        yData : (2000 + Math.floor(Math.random() * 100)),
    })
})

app.listen(process.env.PORT||3000, ()=>{
    console.log("Server Started Successfully")
})