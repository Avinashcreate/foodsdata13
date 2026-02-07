var express = require('express');
var router = express.Router();
var SubmitSchema = require('../routes/ValidationSchema/SubmitSchema')

/* GET users listing. */
router.post('/',async function(req, res, next) {
  // Backend to Requset Data
try{
      console.log("Recieved Data",req.body)
const PersonData = new SubmitSchema(req.body)
 await PersonData.save();
res.status(200).json("Person Data Stored SuccessFully")
}
catch(e){
    console.log("Server Busy")
    res.status(500).json("Bad Request Data")
}



});

module.exports = router;
