'use strict';

const app = require('../src/app');
const debug = require('debug')('nodeDebug:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port',port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`server funcionando na porta ${port}`);

//verifica se o host ja manda a porta ou se seta a padrao 3000 
function normalizePort(val){
    const port = parseInt(val, 10);

    if (isNaN(port)){
        return val;
    }
    if (port >= 0){
        return port;
    }
    return false;
}; //


// tratamento de erros
function onError(error){
    if (error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
    'Pipe' + port :  'Port' + port;

    switch (error.code){

        case 'EACCES':
            console.error(`${bind}  requer privilegios altos de acesso`);
            process.exit(1);
            break;
        
        case 'EADDRINSUE':
            console.error(`${bind}  está em uso`);
            process.exit(1);
            break;
            
        default:
            throw error;

    }
} //


//debug
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ?
    'pipe' + addr : 'port' + addr.port;
    debug(`Listening on + ${bind}`);

}