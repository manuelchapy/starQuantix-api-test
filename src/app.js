const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({extended: false}));	
app.use(cors()); //cada vez que llegue una petición a mi servidor va permitir poder enviar y recibir datos
app.use(express.json()); //desde mi servidor se puede ver info en formato json y string

app.use(require('./routes/mongo_admin.route'));

module.exports = app;