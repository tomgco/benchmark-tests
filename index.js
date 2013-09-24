var arr = [];
var ops = [sum, mul, div, date, push, shift];

var op;
function do_run_me_some() {
  for (var i = 0 ; i < 4e8; i ++) {
    op = ops[Math.floor(Math.random() * ops.length)];
    op(Math.random() * 1000, Math.random() * 1000);
  }
}

do_run_me_some();

function sum(a, b) {
  return a + b;
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