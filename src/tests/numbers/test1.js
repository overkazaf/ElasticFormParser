const Big = require('big.js');
const esprima = require('esprima');



let exp = '__comp1__ + 0.5 + 0.22 * 3 - 4.9 + 0.3 - 0.1';



//esprima.parse(exp).body.map(console.log);

console.log(esprima.tokenize(exp))
//console.log(new Big(exp));