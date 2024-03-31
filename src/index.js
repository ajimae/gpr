// // const { ncrypt } = require('@ajimae/ncrypt')
// const ncrypt = require('@ajimae/ncrypt');

// // const ncrypt = require('ncrypt-js');
// console.log(ncrypt.randomString())
// const n = new ncrypt('ssh');
// // console.log(n.encrypt(8));

// console.log(n.decrypt('977b314309d08222cb8ed4470054690b.ba861cc0ccaa9b25e9a562be0ba0fd86'))

var ncrypt = require('ncrypt-js').default

var n = new ncrypt('ssh')
console.log(n.encrypt(8))