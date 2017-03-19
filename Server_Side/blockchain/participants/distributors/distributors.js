/*eslint-env node */
console.log("distributor==================");
console.trace("distrdibutor==================");
var read = require(__dirname+'/CRUD/read.js');
console.log("distributor=================="+read);
console.trace("distribuetor=================="+read);
exports.read = read.read;
