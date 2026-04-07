const events = require('events');
let eventEmitterExample = new events.EventEmitter();

const messageFunction = () => {
    console.log('Bienvenid@');
}

eventEmitterExample.on('login', messageFunction);

eventEmitterExample.emit('login');