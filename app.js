var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

/*var campgrounds = [
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
*/

mongoose.connect("mongodb://localhost/yelp_camp", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//SCHEMA
var campgroudSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})
var Campground = mongoose.model("Campground", campgroudSchema);


//EXPRESS
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    listAllCampgrounds(function(campgrounds){
        res.render("index", {campgrounds:campgrounds});
    })
});

app.get("/campgrounds/new", function(req, res){
    res.render("newCamp");
});

app.get("/campgrounds/:id", function(req, res) {
    findCamp(req.params.id, function(campground){
        res.render("showCamp", {campground:campground});
    });
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;

    var newCampground = {
        name: name,
        image: image,
        description: desc
    }
    insertCampground(newCampground);
    res.redirect("/campgrounds");
});

app.listen(3000, function(){
    console.log("YelpCamp server has started");
});


//Create a campground
function insertCampground(campgroud){
    Campground.create(campgroud, function(err, campgroud) {
        if(err){
            console.log("Fail to insert: " + err);
        }else{
            console.log("New campgroud created!");
        }
    })
}

//List all campgrounds
function listAllCampgrounds(functionList){
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log("Something went wrong");
        }else{
            console.log(campgrounds);
            functionList(campgrounds);
        }
    });
}

//Find a specific camp
function findCamp(idCamp, callBack){
    Campground.findById(idCamp, function(err, campground){
        if(!err){
            callBack(campground);
        }
        console.log("Something went wrong");
    })
}