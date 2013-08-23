var ops = [
  function sum(a, b) {
    return a + b;
  },
  function mul(a, b) {
    return a * b
  },
  function div(a, b) {
    return a / b
  }
];

var op;
for (var i = 0 ; i < 4e8; i ++) {
  op = ops[Math.floor(Math.random() * ops.length)];
  op(Math.random() * 1000, Math.random() * 1000);
}