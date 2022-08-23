const { User } = require('../database/SequelizeConnection');

module.exports = (app) => {
    app.put('admin/list/:id',(req,res)=>{
        User.update(req.body,{where : {user_id:req.params.id}})
        .then(user => {
            User.findByPk(req.params.id)
            .then( updateUser =>{
                let message = `l'utilisateur ${updateUser.name} a bien ete mis a jour`;
                res.json({message,gata:updateUser})
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error)) 
    })
}
