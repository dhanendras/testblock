/*eslint-env node */
var read = require(__dirname+'/CRUD/read.js');
console.log("distributor=================="+read);
exports.read = read.read;
