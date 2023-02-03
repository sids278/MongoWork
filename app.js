const express =require('express')
const bodyParser=require('body-parser')
const app=express()
const MongoProducts=require('./Mongo')


app.use(bodyParser.json())

app.get('/')
app.post('/products',MongoProducts.createProduct)

app.listen(8080,()=>{console.log("its lisetning")})



