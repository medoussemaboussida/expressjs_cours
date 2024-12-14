const mongo=require('mongoose')
const Schema=mongo.Schema
const Produit = new Schema ({
    name:String,
    description:String,
    prix: Number,
    status: String
})
module.exports=mongo.model('produit',Produit)