const User=require('../models/user')
const Chat=require('../models/chat')

async function add (req, res) {
    try{
    console.log('body' + req.body);
    const user = new User(req.body);
     await user.save();
    
        res.status(200).json(user);
    }
    catch (err){
        res.status(500).send('Error adding user');
    }
}
async function addChat (data) {
    try{
    const chat = new Chat({msg:data.msg});
     await chat.save();
    
        //res.status(200).json(user);
    }
    catch (err){
        res.status(500).send('Error adding user');
    }
}


async function showUser (req, res) {
    try{
    const user = await User.find();
    
        res.status(200).json(user);
    }
    catch (err){
        res.status(500).send('Error showing user');
    }
}


async function showUserId(req, res){
    try{
    const user = await User.findById(req.params.id);
    
        res.status(200).json(user);
    }
    catch (err){
        res.status(500).send('Error showing user');
    }
}

async function showUserByUsername(req, res) {
    try{
        const user = await User.find({username:req.params.username});
    
        res.status(200).json(user);
    }
    catch (err){
        res.status(500).send('Error showing user');
    }
}

async function updateUser(req, res) {
    try{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    
        res.status(200).json(user);
    }
    catch (err){
        res.status(500).send('Error updating user');
    }
}

async function deleteUser(req, res) {
    try{
    const user = await User.findByIdAndDelete(req.params.id);
    
        res.status(200).send("user deleted");
    }
    catch (err){
        res.status(500).send('Error deleting user');
    }
}
module.exports={add,showUser,showUserId,showUserByUsername,updateUser,deleteUser,addChat}
