const { Session } = require ('../database/SequelizeConnection')
const addSession = (ID) =>{ 
    return Session.create({ 
        "session_IdUser":ID
    })
    .then(_=> console.log(`la session de user ${ID}s'est bien ete initialiser`))
}
module.exports = {addSession}