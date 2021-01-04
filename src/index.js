const app = require('./app');
let colors = require('colors');
async function init() {
    await app.listen(3000);
    console.log("server on port 3000".underline.yellow);
}

init();