const express = require("express");
const app = express();
const hbs = require("hbs");
const path=require('path');


// var server = http.createServer(function(req,res){

//     // res.sendFile(path.join(__dirname,'home.html'));

//     var request= require('request');
//     request(url, function(err,ress, body){ 
//         var data= JSON.parse(body);
//         res.write("<html><body><div>");
//         res.write("<h1>"+'City name = '+data['name']+'<br>'+"</h1>");
//         res.write("<h2>"+'Temperature = '+data.main['temp']+'<br>'+"</h2>");
//         res.write("</div></body></html>");
//         res.end();
//     });
// }).listen(3000);



const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const st=path.join(__dirname,"../templates/views");
app.set("view engine","hbs");
app.set("views",st);


// const s=path.join(__dirname,"../public");
// app.use(express.static(s));

// app.get("/",(req,res)=>{
//     res.render("index");
// });


app.get("/form",(req,res)=>{
    res.render("form");
});

app.post("/form",(req,res)=>{
    try{
    const city=req.body.city;
    
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=532a94837becd1330995159c9c2e3f97';
    const request = require("request");
    
    request(url, function(err,ress, body){ 
                var data= JSON.parse(body);
                 res.write("<html><body><div>");
                 res.write("<h1>"+'City name = '+data['name']+'<br>'+"</h1>");
                 res.write("<h2>"+'Temperature = '+data.main['temp']+'<br>'+"</h2>");
                 res.write("</div></body></html>");
                 res.end();
    });
}
catch (error) {
    console.log(error);
}
});

app.listen(3000,()=>{
    console.log("Listening to 3000");
});