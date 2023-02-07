const express =require('express')
const bodyParser=require('body-parser')
const app=express()
const MongoProducts=require('./Mongoose')


app.use(bodyParser.json())

app.get('/',MongoProducts.getProducts)
app.post('/products',MongoProducts.createProduct)

app.listen(8080,()=>{console.log("its lisetning")})



