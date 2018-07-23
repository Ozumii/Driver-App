const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
    name:String,
    email:{
        type:String,
        required:true
    },
    driving:{
        type:Boolean,
        default:false
    }
    //location:{lat:number, long:number
    
    
});

const Driver = mongoose.model('driver', driverSchema);

module.exports = Driver;