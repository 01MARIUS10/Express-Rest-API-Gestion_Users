// const mysql = require('mysql2');



// var db = mysql.createConnection({
//    host: "localhost",
//    user: "MARIUS",
//    password: "marius",
//    database : `Gestion_de_session`
// });

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connecté à la base de données MySQL!");
// });

// let users = db.query("SELECT * FROM user",(err, result)=>{
//         if (err) throw err;
//         console.log( result)
//         return result;
//     });

const { Sequelize , DataTypes } = require('sequelize')
const modelUser = require('../model/user');
const modelSession = require ('../model/session');
var { USERS } = require('./donnees');


const sequelize = new Sequelize(
    'Gestion_de_session',
    'MARIUS',
    'marius',
    {
        host : "localhost",
        dialect : 'mysql',
        logging : false
    }
)

const User = modelUser(sequelize,DataTypes);
const Session = modelSession(sequelize,DataTypes);

sequelize.authenticate()
    .then(_=>console.log("la connection s'est bien etablie"))
    .catch(error => console.error('Impossible de se connecter a la bdd '+error))

const initDB = () =>{
    return sequelize.sync({force:true})
    .then(_ =>{
            console.log('la base de donne gestion_de_session a bien ete synchroniser');
            USERS.map(usr => {
                            User.create({
                                        user_name:usr.name,
                                        user_email:usr.email,
                                        user_picture:usr.picture,
                                        user_password:usr.password,
                                        user_function:usr.function
                                        }).then(us =>console.log(us.toJSON()))
                                          .catch(error =>console.error(error))
                            })
                  console.log('les donnees ont bien ete enregistrer dans la base de donnees')
            }
        ); 
}

module.exports = {User,Session,initDB};