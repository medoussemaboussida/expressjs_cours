const express=require('express')
const router=express.Router()
const produitController= require('../controller/produitController')
const validate  = require('../middleware/validate'); // Assurez-vous que le fichier `validate.js` exporte correctement validateProduit


router.post('/add',validate.validateProduit,produitController.add);

router.get('/showProduit',produitController.showProduit);

router.get('/showProduitId/:id', produitController.showProduitId);

router.put('/updateProduit/:id', produitController.updateProduit);

router.delete('/deleteProduit/:id',produitController.deleteProduit);


module.exports=router