const { Session } = require('../../database/SequelizeConnection');

module.exports = (app) => {
    app.put('admin/session/:id',(req,res)=>{
        console.log(req.body);
        Session.findByPk(1)
        .then(session => {
            console.log(session);
            res.json(session);
        })

    })
}