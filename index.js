var express = require('express');

const app = express();

app.use(express.json());

/**Routers */
var usersRouter = require('./router/users.js');

app.use('/users', usersRouter);



app.listen(3000, () => {
    console.log('Serveur en Marche');
});
