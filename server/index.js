const express = require("express"); 
const app = express()
app.use(express.json())

const dotenv = require("dotenv")
dotenv.config()

const mongoose = require("mongoose");
const testModel = require("./models/testModel");
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
                buy_or_rent,
                topPrice, 
                lowPrice, 
                topLiving_area_square,
                lowLiving_area_square,
                search,
                sortMethod
            } = req.body

        sortMethod = sortMethod || "default"

        page = page || 1
        limit = limit || 18 

        let offset = page * limit - limit 
 
        let paramsObj = {} 
        let sortObj = {}
        if(type){
            paramsObj.type = type
        }

        if(buy_or_rent){
            paramsObj.buy_or_rent = buy_or_rent
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

        const offers = await testModel.find(paramsObj).sort(sortObj).limit(limit).skip(offset)

        let response = {};
        if(page === 1){
            const allOffers = await testModel.find(paramsObj).count()
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
app.get("/:id", async(req,res)=>{
    try{
        const offer = await testModel.findOne({_id:req.params.id})
        res.status(200).json(offer)
    }catch(err){
        console.log(err)
        res.status(500).json("some error")
    }
})

app.listen(8000,()=>{console.log("server is ok")})    