// generator which yields powerNums

function* powerSeries(num, pow, limit) {
  let result = 0;

  //until limit the power num is yield
  while (result < limit) {
    result = num ** pow;
    yield result;
    num++;
  }
}

//to display powerseries
function displayData() {
  //Enter num and pow
  let [num, pow] = prompt("Enter starting num and power spearated with space")
    .split(" ")
    .map((el) => +el);

  //enter limit
  let limit = Number(prompt("Enter the limit"));

  //called generator
  let series = powerSeries(num, pow, limit);

  let result = series.next();

  //until generator runs value is logged
  while (!result.done) {
    console.log(result.value);
    result = series.next();
  }
}

//called the function
displayData();
