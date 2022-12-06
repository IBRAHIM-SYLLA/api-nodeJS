var express = require('express');

const app = express();

/**Routers */
var usersRouter = require('./routeur/users.js');

app.use('/', usersRouter);

app.use(express.json());

app.listen(3000);

/**Connexion database */
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'annuaire-api'
});

//is Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

// app.get('/users', (req, res) => {
//     var sql = "SELECT * FROM utilisateurs";
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         // console.log(result);
//         res.status(200);
//         res.send(result);
//     })
// })

app.post('/insertUsers', (req, res) => {
    console.log(req.body)
    // var sql = `INSERT INTO utilisateurs ( email, password, firstname, lastname, created_at, groupe_id) VALUES ($`(req.body.email)`, req.body.password, req.body.firstname, req.body.lastname,NOW(), req.body.groupe_id)`;
    // db.query(sql, (err, result) => {
    //     if (err) throw err;
    //     console.log("1 groupe insérer bravo Ibrah");
    //     res.status(201);
    //     res.send(result);
    // })
})