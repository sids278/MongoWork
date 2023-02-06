const { json } = require('body-parser');

const Mongoclient =require('mongodb').MongoClient
const url='mongodb+srv://udays2002:nodyceaser24@sidcluster.i2gmbiv.mongodb.net/sidsbase?retryWrites=true&w=majority'



// basically here i added the name of the db==sidsbase

// then i basically all the code same-->now mongo complete

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
    //    console.log(2)
    //    db.createCollection('products3')
       const result=db.collection('products4').insertOne(newProduct)
    //    client.close()
    }catch(error){
        return json({message:"couldnt do what u just said"})
    }
    
    res.json(newProduct)

}


const getProducts=async(req,res,next)=>{

}

exports.createProduct=createProduct;
exports.getProducts=getProducts;
