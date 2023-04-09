const mongoose = require("mongoose");
const testSchema = new mongoose.Schema(
    {
        name:{type:String,  required:true},
        price:{type:Number},
        Buy_or_rent:{type:String},
        link:{type:String},
        type:{type:String},
        location:{type:String},
        buy_or_rent:{type:String},
        living_area_square:{type:Number},
        currency:{type:String},
        images:[{type:String}],
        description:{
            "advanced info":[{type:String}],
            " shoud_to_know ":[{type:String}]
        }
    }
)
module.exports = mongoose.model("test",testSchema)