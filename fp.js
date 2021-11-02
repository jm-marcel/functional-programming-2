const R = require("ramda");

function isEven(number) {
  const n = R.clone(number);
  n.even = n.value % 2 == 0;
  return n;
}

function isOdd(number) {
  const n = R.clone(number);
  n.odd = n.value % 2 != 0;
  return n;
}

function positive(number) {
  const n = R.clone(number);
  n.positive = n.value > 0;
  return n;
}

function negative(number) {
  const n = R.clone(number);
  n.negative = n.value < 0;
  return n;
}

function isZero(number) {
  const n = R.clone(number);
  n.zero = n.value == 0;
  return n;
}

function isPrime(number) {
  for (let i = 2; i < number; i++) return number % i === 0 ? false : number > 1;
}

function mapToNumberObject(number) {
  return { value: number };
}

const arr = [-1, 50, 5, 10, -8, 20, 25, 0, 100, 14, -123];

arr.map((number) => console.log(mapToNumberObject(number)));
