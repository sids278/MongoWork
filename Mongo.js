const { json } = require('body-parser');

const Mongoclient =require('mongodb').MongoClient
const url='mongodb+srv://mONGOuser:WMUdEONPxHU0Sq6W@cluster0.ll5hozd.mongodb.net/products_test?retryWrites=true&w=majority'
// const password=2fKK5u3qyXM1rzAQ-->used above in connection string;
//WMUdEONPxHU0Sq6W
const createProduct=async(req,res,next)=>{
    const newProduct= {
        name:req.body.name,
        price:req.body.price
    }

    const client=new Mongoclient(url);
    // console.log(client)

    try{
       await client.connect()
       const db=client.db()
    //    console.log(db.collection('products'))
       console.log(2)
       const result=db.collection('products3').insertOne(newProduct)

    }catch(error){
        return json({message:"couldnt do what u just said"})
    }
    client.close()
    res.json(newProduct)

}


const getProducts=async(req,res,next)=>{

}

exports.createProduct=createProduct;
exports.getProducts=getProducts;