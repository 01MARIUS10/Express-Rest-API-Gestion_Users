const { User } = require('../database/SequelizeConnection');

module.exports = (app)=>{
    app.get('/list/:id',(req,res)=>{
        User.findByPk(req.params.id)
        .then (user=> {
            if(user){
                let message = "l'utilisateur a bien ete trouver"
                console.log(user)
                res.json({message,data:user})
            }
            else{
                res.end(`Aucun utilisateur ${req.param.id}`)
            }
        })
        .catch(error => console.log(error))
    })
}
