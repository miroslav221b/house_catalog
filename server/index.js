const express = require("express"); 
const app = express()
app.use(express.json())

const dotenv = require("dotenv")
dotenv.config()

const mongoose = require("mongoose");
const offerModel = require("./models/offerModel");
mongoose
.connect(process.env.MONGO_URL)
.then(()=>{console.log("db is ok")})
.catch((err)=>{console.log(err)}) 

var cors = require("cors");
app.use(cors())

app.put("/", async(req,res)=>{
    try{
        let { 
                page,  
                limit, 
                type,
                order_type,
                topPrice, 
                lowPrice, 
                topLiving_area_square,
                lowLiving_area_square,
                search,
                sortMethod
            } = req.body

        sortMethod = sortMethod || "default"

        page = page || 1
        limit = limit || 12

        let offset = page * limit - limit 
 
        let paramsObj = {} 
        let sortObj = {}
        if(type){
            paramsObj.type = type
        }

        if(order_type){
            paramsObj.order_type = order_type
        } 

        if(lowPrice && topPrice){
            paramsObj.price = { $gt:lowPrice, $lt:topPrice }
        }else if(lowPrice){
            paramsObj.price = { $gt:lowPrice }
        }else if(topPrice){
            paramsObj.price = { $lt:topPrice }
        } 
  
        if(lowLiving_area_square && topLiving_area_square){
            paramsObj.living_area_square = { $gt:lowLiving_area_square, $lt:topLiving_area_square }
        }else if(lowLiving_area_square){
            paramsObj.living_area_square = { $gt:lowLiving_area_square}
        }else if(topLiving_area_square){
            paramsObj.living_area_square = { $lt:topLiving_area_square }
        }  
 
        if(search){ 
            paramsObj = {$or:[
                {"location":{$regex: '.*' + search + '.*'}, ...paramsObj},
                {"name":{$regex: '.*' + search + '.*'}, ...paramsObj}
            ]}
        }  

        if(sortMethod === "fromTopPrice"){
            sortObj.price = 1
        }else if(sortMethod === "fromLowPrice"){
            sortObj.price = -1
        }else if(sortMethod === "fromTopSize"){
            sortObj.living_area_square = 1
        }else if(sortMethod === "fromLowSize"){
            sortObj.living_area_square = -1
        }

        const offers = await offerModel.find(paramsObj).sort(sortObj).limit(limit).skip(offset)

        let response = {};
        if(page === 1){
            const allOffers = await offerModel.find(paramsObj).count()
            pageCount = Math.floor(allOffers/limit)

            response = {
                offers,
                supportingInformation:{
                    pageCount,
                    allOffers
                }
            }
        }else{
            response = {offers}
        }

        res.status(200).json(response)

    }catch(err){
        console.log(err)
        res.status(500).json("some error")
    }
})
app.get("/getOfferById/:id", async(req,res)=>{
    try{
        const offer = await offerModel.findOne({_id:req.params.id})
        res.status(200).json(offer)
    }catch(err){
        console.log(err)
        res.status(500).json("some error")
    }
})
app.get("/helperInfo", async(req,res)=>{
    try{
        const topPrice = await offerModel.find().sort({"price": -1}).limit(1)
        const lowPrice = await offerModel.find().sort({"price": 1}).limit(1)
        const topLiving_area_square = await offerModel.find().sort({"living_area_square": -1}).limit(1)
        const lowLiving_area_square = await offerModel.find().sort({"living_area_square": 1}).limit(1)
        
        const helperInfo = { 
            topPrice:topPrice[0].price,  
            lowPrice:lowPrice[0].price, 
            topLiving_area_square:topLiving_area_square[0].living_area_square,
            lowLiving_area_square:lowLiving_area_square[0].living_area_square
        } 
        res.status(200).json(helperInfo)  
    }catch(err){
        console.log(err)
        res.status(500).json("some error")
    }
})
app.listen(process.env.PORT,()=>{console.log("server is ok")})   