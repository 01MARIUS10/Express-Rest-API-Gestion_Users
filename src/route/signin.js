const { User } = require ('../database/SequelizeConnection');

module.exports = (app) => {
    app.post('/signin',(req,res)=>{
        User.create(req.body)
        .then (user => {
            let message = `l 'utilisateur ${user.name} a bien ete inserer`;
            res.json({message,data:user});
        })
        .catch(error => console.log(error))
    })
}