const express = require("express")

const bodypasser = require("body-parser");

const app = express()

//Files 

app.use(bodypasser.urlencoded({extended: true}));

app.use('/css', express.static(__dirname + "/css"))

app.use('/script', express.static(__dirname + "/script"))

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html")
})


// app.post("/", function(req, res){

//     res.send("Your result is: " + result)
// })


app.listen(4000, function(){
    console.log("Server is running on port 4000")
})