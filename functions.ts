const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log('Results: ' + num);
};

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

printResult(add(23, 43));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(4, 4));

addAndHandle(2, 4, (num) => {
  console.log('CallBack Function:- ');
  console.log('Result :', num);
});
