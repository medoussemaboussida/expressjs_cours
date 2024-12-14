const express=require('express')
const router=express.Router()
const userController= require('../controller/userController')
const validate =require('../middleware/validate');

router.post('/add',validate.validate,userController.add );

router.get('/showUser',userController.showUser);

router.get('/showUserId/:id', userController.showUserId);

router.get('/showUserByUsername/:username', userController.showUserByUsername);

router.put('/updateUser/:id', userController.updateUser);

router.delete('/deleteUser/:id',userController.deleteUser);

router.get('/chat',(req,res)=>{

res.render("chat")
});



module.exports=router

















/*router.get('/show',(req,res)=>{
    res.send('salut');

});


router.get('/add/:username/:email/:cin',(req,res)=>{
    new User({
        username:req.params.username,
        email:req.params.email,
        cin:req.params.cin
    }).save()
    res.send('ajout avec succés');

});*/