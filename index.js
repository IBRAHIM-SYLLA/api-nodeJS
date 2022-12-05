var express = require('express');

const app = express();

const mysql = require('mysql');

app.listen(3000);

// respond with "hello world" when a GET request is made to the homepage
app.get('/ibraboss', (req, res) => {
    res.send('ibrabosss')
  })

// Create connection

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

app.get('/users', (req, res) => {
    db.query('SELECT * FROM utilisateurs', (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
})