const mongoose = require("mongoose");
const offerSchema = new mongoose.Schema(
    {
        location:{type:String},
        coordinates:{
            latitude:{type:Number},
            longitude:{type:Number}
        },
        link:{type:String},
        name:{type:String},
        price:{type:Number},
        living_area_square:{type:Number},
        order_type:{type:String},
        type:{type:String},
        images:[{type:String}],
        description:{   
            main:[{type:String}],
            additional_information:[{type:String}]
        }
    }
)
module.exports = mongoose.model("offer",offerSchema)