'use strict';

const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

const port = 3000;
app.set('port',port);

const server = http.createServer(app);

server.listen(port);
//server.on('error', onError);
//server.on('listening', onListening);
console.log(`server funcionando na porta ${port}`);

