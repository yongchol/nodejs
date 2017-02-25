var crypto = require('crypto');

// make hash
var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

// print out
console.log('crypto_hash:', output);

