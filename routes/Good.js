var express = require('express');
var router = express.Router();

/* GET users listing. */
const good = [
      {
        id:"1",
        name:"Chicken Biriyani",
        image:'http://localhost:3000/images/Briyani.webp',
        price:"150"
    },
      {
        id:"2",
        name:"Dosa",
        image:'http://localhost:3000/images/Dosa.webp',
        price:"30"
    },  {
        id:"3",
        name:" Fry Rise",
        image:'  http://localhost:3000/images/Fry rise.webp',
        price:"120"
    },  {
        id:"4",
        name:"Paratta",
        image:'http://localhost:3000/images/parrotta.webp',
        price:"20"
    },  {
        id:"5",
        name:"Burger",
        image:'http://localhost:3000/images/Burger.webp',
        price:"70"
    },  {
        id:"6",
        name:"Shawarma",
        image:'http://localhost:3000/images/shawarma.webp',
        price:"110"
    },  {
        id:"7",
        name:"Egg Rise",
        image:'http://localhost:3000/images/Egg rise.webp',
        price:"100"
    },  {
        id:"8",
        name:"Idali",
        image:'http://localhost:3000/images/idli.webp',
        price:"30"
    },  {
        id:"9",
        name:"Vegetable Shawarma",
        image:'http://localhost:3000/images/saima.webp',
        price:"10"
    },  {
        id:"10",
        name:"Sambar Vada",
        image:'http://localhost:3000/images/Vada Sambar.webp',
        price:"20"
    },{
        id:"11",
        name:"Rise",
        image:'http://localhost:3000/images/white rise.webp',
        price:"45"
    },{
        id:"12",
        name:"Kizhi Paratta",
        image:"http://localhost:3000/images/Kizhi Paratta.webp",
        price:"150"
    },
    {
        id:"13",
        name:"Lemon Rise",
        image:"http://localhost:3000/images/Kizhi Paratta.webp",
        price:"45"
    },{
         id:"14",
        name:"50 biscuts",
        image:"http://localhost:3000/images/50 busit.jpeg",
        price:"15"
    },{
         id:"14",
        name:"Apple Jusice",
        image:"http://localhost:3000/images/apple jusice.jpeg",
        price:"23"
    },{
           id:"15",
        name:"Dairy Milk Chocolate",
        image:"http://localhost:3000/images/Dairy Mik chocolate.jpeg",
        price:"100"
    },
    {
           id:"16",
        name:" Orange Jusice",
        image:"http://localhost:3000/images/jusice.jpeg",
        price:"30"
    },{
         id:"17",
        name:" Kit Kat Chocolate ",
        image:"http://localhost:3000/images/Kit kat chocolate.jpeg",
        price:"120"
    },{
        
         id:"17",
        name:" Lays ",
        image:"http://localhost:3000/images/lays.jpeg",
        price:"10"
    },{
         id:"17",
        name:" Milk Biscuits ",
        image:"http://localhost:3000/images/milk biscuits.jpeg",
        price:"16"
    },{
         id:"17",
        name:" Milk Biscuits ",
        image:"http://localhost:3000/images/milk biscuits.jpeg",
        price:"16"
    },{
         id:"17",
        name:" Snacks ",
        image:"http://localhost:3000/images/snacks cheap.jpeg",
        price:"55"
    },{
          id:"17",
        name:" Vegetables ",
        image:"http://localhost:3000/images/vegeatble g.jpeg",
        price:"300"
    },
    {
          id:"20",
        name:" GoodDay Biscuts ",
        image:"http://localhost:3000/images/goodday.webp",
        price:"5"
    },{
         id:"21",
        name:" Black Cake ",
        image:"http://localhost:3000/images/Black cake.webp",
        price:"50"
    },{
          id:"22",
        name:" 5 Star Chocolate ",
        image:"http://localhost:3000/images/5 star.webp",
        price:"50"
    },{
        id:"23",
        name:" Chocolate ",
        image:"http://localhost:3000/images/chocolate.webp",
        price:"500"
    },{
        id:"24",
        name:" Vegetable Sandwiches ",
        image:"http://localhost:3000/images/Sandwiches.webp",
        price:"300"
    },
    {
        id:"25",
        name:" Chapti",
        image:"http://localhost:3000/images/Chapti.jpeg",
        price:"20"
    },{
id:"26",
        name:" 7 Up Justice",
        image:"http://localhost:3000/images/7up.webp",
        price:"70"

    }
    ,{
id:"27",
        name:" Ice cream",
        image:"http://localhost:3000/images/icrea.webp",
        price:"70"

    },{
        id:"28",
        name:" Ice cream",
        image:"http://localhost:3000/images/Icean.webp",
        price:"70"

    }
]
router.get('/', function(req, res, next) {
  res.status(200).json(good);
});

module.exports = router;
