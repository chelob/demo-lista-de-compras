const express = require('express');

const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const routes = require('./api/routes/shoppingListRoutes'); // importing route

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); // register the route
app.listen(port);

/* eslint-disable no-console */
console.log(`shopping list RESTful API server started on: ${port}`);
console.log(`env: ${app.get('env')}`);
