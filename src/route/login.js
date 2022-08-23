const { User } = require ('../database/SequelizeConnection');
const { addSession } = require ('../controller/session')

module.exports = (app) => {
    app.post('/login',(req,res)=>{
        User.findOne({where : {user_email : req.body.user_email}})
        .then(user => {
            if(user){
                let message = `nous avons trouver l'user ${user.user_name} `;
                if(user.user_password ===req.body.user_password){
                    addSession(user.user_id,300)
                    res.json({message,data:user})
                }
                else{
                    message+= ` mais le mot de passe est incorrect`
                    res.json(message);
                }
            }
            else{
                res.json(`aucun utilisateur de mail : ${req.body.user_email}`)
            }
        })
    })
}