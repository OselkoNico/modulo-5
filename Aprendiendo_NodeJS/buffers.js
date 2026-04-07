const fs = require('fs');

let streamExample = fs.createReadStream('./message.txt');

streamExample.on('data', (chunk) => {
    console.log(chunk.toString());
    console.log(`Tamaño datos recibidos ${chunk.length} bytes`);
});