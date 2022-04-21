function* naturalNum() {
  let num = 1;
  while (num) {
    yield num++;
  }
}

function* powerSeries(num, pow) {
  while (num) {
    let res = num ** pow;
    yield res;
    num++;
  }
}

function* yieldData(callback) {
  yield* callback;
}

// let data = yieldData(2, naturalNum());
// let data = yieldData(7, powerSeries(3, 2));
// let data = yieldData(3, ["a", "b", "c", "d", "e", "f"]);
// console.log(data.next());
// console.log(data.next());
// console.log(data.next());
// console.log(data.next());
// console.log(data.next());

function logData(limit, args) {
  let data = yieldData(args);
  let res = data.next();
  while (limit--) {
    console.log(res.value);
    res = data.next();
  }
}

// logData(7, naturalNum());
// logData(3, ["a", "b", "c", "d", "e", "f"]);
// logData(7, powerSeries(3, 2));
