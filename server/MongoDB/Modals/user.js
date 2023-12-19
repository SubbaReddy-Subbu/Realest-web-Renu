const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name :{type:String,required:true},
    email :{type:String,required:true},
    avatar :{type:String,required:true},
    location :{type:String,required:true},
    Price :{type:Number,required:true},
    allPropertys :[{type:mongoose.Schema.Types.ObjectId,required:true ,ref:'Propertys'}]
})
   
module.exports = mongoose.model('Users',userSchema)