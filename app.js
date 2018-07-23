const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const app = express();



//middleware
app.use(bodyParser.json());

//End of middleware

routes(app);


module.exports = app;
