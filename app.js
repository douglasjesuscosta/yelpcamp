var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
    {name:"Acampamento sombra da mata", image:"https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg"},
    {name:"Acampamento da Xuxa", image:"https://farm5.staticflickr.com/4033/4306518513_f35ecd90b5.jpg"},
    {name:"Acampamento da montanha do Capiroto", image:"https://farm1.staticflickr.com/82/225912054_690e32830d.jpg"},
    {name:"Acampamento sombra da mata", image:"https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg"},
    {name:"Acampamento da Xuxa", image:"https://farm5.staticflickr.com/4033/4306518513_f35ecd90b5.jpg"},
    {name:"Acampamento da montanha do Capiroto", image:"https://farm1.staticflickr.com/82/225912054_690e32830d.jpg"},
    {name:"Acampamento sombra da mata", image:"https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg"},
    {name:"Acampamento da Xuxa", image:"https://farm5.staticflickr.com/4033/4306518513_f35ecd90b5.jpg"},
    {name:"Acampamento da montanha do Capiroto", image:"https://farm1.staticflickr.com/82/225912054_690e32830d.jpg"},
    {name:"Acampamento sombra da mata", image:"https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg"},
    {name:"Acampamento da Xuxa", image:"https://farm5.staticflickr.com/4033/4306518513_f35ecd90b5.jpg"},
    {name:"Acampamento da montanha do Capiroto", image:"https://farm1.staticflickr.com/82/225912054_690e32830d.jpg"},
    {name:"Acampamento sombra da mata", image:"https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg"},
    {name:"Acampamento da Xuxa", image:"https://farm5.staticflickr.com/4033/4306518513_f35ecd90b5.jpg"},
    {name:"Acampamento da montanha do Capiroto", image:"https://farm1.staticflickr.com/82/225912054_690e32830d.jpg"}
] 

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render("newCamp.ejs");
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;

    var newCampground = {
        name: name,
        image: image
    }
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.listen(3000, function(){
    console.log("YelpCamp server has started");
});