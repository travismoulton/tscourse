function add(n1: number, n2: number) {
  return n1 + n2;
}

// A function with no return statement has a return type of void
function printResult(num: number): void {
  console.log("Result" + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// This is saying that combineValues needs to be type function, that takes two values that
// are numbers, and returns a number
let combineValues: (a: number, b: number) => number;

addAndHandle(1, 2, (result) => {
  console.log(result);
});
