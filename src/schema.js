var  mongoose = require("./connection.js")
var schema = mongoose.Schema(
    {
        drivername:String,
        driverno:Number,
        id:Number,
        Location:{
            Latitude:Number,
            Longitude:Number
        },
        Vehiclecolor: String
    } 
);
var taxischema = mongoose.model("taxi", schema); 
module.exports = taxischema;