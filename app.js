const express = require("express")


const app = express()


app.get("/", function(req, res){
    res.send("I am running")
})



app.listen(3000, function(){
    console.log("Running on Port 3000")
})