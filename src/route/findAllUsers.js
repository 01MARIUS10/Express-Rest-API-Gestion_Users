const { User } = require('../database/SequelizeConnection')

module.exports = (app) => {
    app.get('/list',(req,res)=>{
        User.findAll()
        .then(users=> {
                let message = 'la liste des user a bien ete trouve'
                // console.log(users[0])
                res.json({message,data:users})
        })
        .catch(error => console.log(error))
    })
}

