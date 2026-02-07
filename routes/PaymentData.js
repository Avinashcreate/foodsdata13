var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
try{
    console.log("Recieved Data",req.body)
    res.status(200).json("Payment Successfully")
}catch(e){
    console.log(e)
}
});

module.exports = router;
