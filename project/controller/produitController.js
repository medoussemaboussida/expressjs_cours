const Produit=require('../models/produit')

async function add (req, res) {
    try{
    console.log('body' + req.body);
    const produit = new Produit(req.body);
     await produit.save();
    
        res.status(200).json(produit);
    }
    catch (err){
        res.status(500).send(err);
    }
}


async function showProduit (req, res) {
    try{
    const produit = await Produit.find();
    
        res.status(200).json(produit);
    }
    catch (err){
        res.status(500).send('Error showing produit');
    }
}


async function showProduitId(req, res){
    try{
    const produit = await Produit.findById(req.params.id);
    
        res.status(200).json(produit);
    }
    catch (err){
        res.status(500).send('Error showing produit');
    }
}


async function updateProduit(req, res) {
    try{
    const produit = await Produit.findByIdAndUpdate(req.params.id,req.body,{new:true});
    
        res.status(200).json(produit);
    }
    catch (err){
        res.status(500).send('Error updating produit');
    }
}

async function deleteProduit(req, res) {
    try{
    const produit = await Produit.findByIdAndDelete(req.params.id);
    
        res.status(200).send("produit deleted");
    }
    catch (err){
        res.status(500).send('Error deleting produit');
    }
}
module.exports={add,showProduit,showProduitId,updateProduit,deleteProduit}
