'use strict';

const hostname = '127.0.0.1';
const port = 3333;

const express = require('express'),
    es6Renderer = require('express-es6-template-engine'); // missing const for a variable 

const app = express();

app.engine('html', es6Renderer);  // undefined due to no variable
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(PORT, HOSTNAME, () => {       // needs to be lowercase 
    console.log(`Server running at http://${hostname}:${port}`)
});

const rootController = require('./routes/index');
const rangersController = require('./routes/rangers');


app.use('/rangers', rangersController);