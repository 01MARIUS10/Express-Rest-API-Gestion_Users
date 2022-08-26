console.log("hello node!");

const morgan = require('morgan')
const cors = require('cors')

//utilisation d'express
const express = require('express');
const port = 3000;
const app = express();

//parser les requetes url,rendre les format json
const bodyParser = require('body-parser');
const sequelize = require('./src/database/SequelizeConnection');

sequelize.initDB()
// const logger = (req,res,next)=>{
//     console.log(`URL = ${req.url}`)
//     next();
// }
// app.use(logger);
//permettant de voir dans le terminal(console.log) les different requetes emis par l'utilisateur

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


app
    .use(morgan('dev'))
    // .use(express.json())
    // .use(express.urlencoded({extends:true}))
    .use(bodyParser.json())
    .use(cors())

app.get('/',(req,res)=>{
    res.send('hello express2 belaka xD')
})

require('./src/route/findAllUsers')(app);
require('./src/route/findUser')(app);
require('./src/route/modifyUser')(app);
require('./src/route/login')(app);
require('./src/route/signin')(app);
require('./src/route/Admin/deleteUser')(app);
require('./src/route/Admin/modifySession')(app);

app.listen(port,()=>{
    console.log('Notre app node s\'est bien demarrer sur http://localhost:'+port )
})