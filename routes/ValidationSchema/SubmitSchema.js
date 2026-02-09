const mongoose = require('mongoose')

const SubmitSchema  = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    number:{
        type:Number
    }
})
const excutedFlowSumbitData = mongoose.model('news',SubmitSchema)
module.exports = excutedFlowSumbitData;