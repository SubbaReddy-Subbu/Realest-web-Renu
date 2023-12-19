const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title :{type:String,required:true},
    description :{type:String,required:true},
    propertyType :{type:String,required:true},
    location :{type:String,required:true},
    Price :{type:Number,required:true},
    Photo :[{type:String,required:true}],
    Creater :{type:mongoose.Schema.Types.ObjectId,required:true, ref:'user'},
})
   
module.exports = mongoose.model('Propertys',PropertySchema)