const mongoose=require('mongoose')

const product= require('./models/product')
const url='mongodb+srv://udays2002:nodyceaser24@sidcluster.i2gmbiv.mongodb.net/sidsbase?retryWrites=true&w=majority'

mongoose.connect(url).then(()=>console.log('it got connected'))
const createProduct= async(req,res,next)=>{
    const newProduct=new product({
        name:req.body.name,
        price:req.body.price
    })
    const result=await newProduct.save()
    res.json(result)
}

const getProducts= async(req,res,next)=>{
    const products= await product.find().exec()
    res.json(products)
}

exports.createProduct=createProduct;
exports.getProducts=getProducts
