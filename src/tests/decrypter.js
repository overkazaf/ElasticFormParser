/**
 * IntelliFormDesigner 解密工具集
 * Author: overkazaf
 */
var fs = require('fs');
var path = require('path');
var CryptoJS = require("crypto-js");

var SECRET_KEY_FOR_TESTING = 'abcd';
var REMOTE_SALT_FOR_TESTING = '1234';
var TARGET_KEY_FOR_TESTING = 'abcd_1234';

console.log('process.argv', process.argv);

if (process.argv.length < 4) {
	console.log(`
		Usage: node decrypter.js exported_1496338568628.ifd form.json
	`);

	throw new Error('Please input input file name and output file name');
}

var inputName = process.argv[2];
var outputName = process.argv[3];

var ciphertext = fs.readFileSync(path.join(__dirname, inputName));

// Decrypt 
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), TARGET_KEY_FOR_TESTING);
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
 
console.log('decryptedData', decryptedData);


fs.writeFile(path.join(__dirname, outputName), JSON.stringify(decryptedData), function(err) {
	if (err) throw err;
	console.log('File ' + outputName + ' has been successfully written!');
});