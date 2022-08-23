const { User } = require ('../../database/SequelizeConnection');

module.exports = (app) => {
    app.delete('admin/list/:id',(req,res)=>{
        User.findByPk(req.params.id)
        .then(delUser => {
            if(delUser){
                const deleteUser = delUser;
                User.destroy({where :{user_id : delUser.user_id}})
                .then (_=> {
                    const message = `l'utilisateur ${deleteUser.user_name} a bien ete supprimer`;
                    res.json({message,data:deleteUser})
                })
                .catch(error => console.log(error))
            }
            else{
                const message = `il n'y a aucun utilisateur ${req.params.id} `;
                res.json(message)
            }
            
        })
        .catch(error => console.log(error))
    })
}
