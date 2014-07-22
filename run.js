var arr = [];
var ops = [sum, mul, div, date, push, shift, zfillright, bitamp];

var op;
var ran = 0;
const MAX = 3e6;

function run() {
  op = ops[Math.floor(Math.random() * ops.length)];
  op(Math.random() * 1002, Math.random() * 1001);
  ran ++;
  if (ran < MAX) setImmediate(run);
}

module.exports = run;

function sum(a, b) {
  return a + b;
}

function zfillright(a, b) {
 return a >>> b
}

function bitamp(a, b) {
 return a & b
}

function mul(a, b) {
  return a * b
}

function div(a, b) {
  return a / b
}

function date() {
  var d = new Date();
  return d.toString();
}

function push(a) {
  arr.push(a);
}

function shift() {
  arr.shift();
}
