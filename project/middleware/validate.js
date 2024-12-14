const yup=require('yup')

async function validate(req,res,next){

    try{
        const Schema=yup.object().shape({
            username : yup.string().matches(/^[A-Z][a-z]/, "Le nom d'utilisateur doit commencer par une lettre majuscule et contenir uniquement des lettres.") .required(),
            email:yup.string().email().matches(/^[a-zA-Z0-9._%+-]+@esprit\.tn$/, "L'adresse e-mail doit se terminer par @esprit.tn.").required(),
            cin:yup.number().required()
        })
     
    await Schema.validate(req.body);
    next();
    }
    catch(err)
    {
        
        return res.status(200).json(err)
    }
}

async function validateProduit(req,res,next){

    try{
        const Schema=yup.object().shape({
            name : yup.string().matches(/^[A-Z][a-z]/, "Le nom produit doit commencer par une lettre majuscule et contenir uniquement des lettres.") .required(),
            description : yup.string().matches(/^[A-Z][a-z]/, "La description doit commencer par une lettre majuscule et contenir uniquement des lettres.") .required(),
            prix:yup.number().required(),
            status: yup.boolean().required("Le statut est requis.")
        })
     
    await Schema.validate(req.body);
    next();
    }
    catch(err)
    {
        
        return res.status(200).json(err)
    }
}
module.exports = {
    validate,
    validateProduit,
};