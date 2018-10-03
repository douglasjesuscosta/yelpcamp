var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {nome:"Acampamento sombra da mata", image:"https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg"},
        {nome:"Acampamento da Xuxa", image:"https://farm5.staticflickr.com/4033/4306518513_f35ecd90b5.jpg"},
        {nome:"Acampamento da montanha do Capiroto", image:"https://farm1.staticflickr.com/82/225912054_690e32830d.jpg"}
    ] 

    res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(3000, function(){
    console.log("YelpCamp server has started");
});