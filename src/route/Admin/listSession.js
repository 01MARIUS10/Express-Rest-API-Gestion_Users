const { Session } = require('../../database/SequelizeConnection');

module.exports = (app) => {
    app.get('admin/session/list',(req,res)=>{
        console.log(req.body);
        Session.findAll()
        .then(sessionStorage => {
            console.log(sessions);
            let message = 'voici tout les list';
            res.json({ message,sessions});
        })
    })
}