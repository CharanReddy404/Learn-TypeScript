// UNION TYPES || Literal Types ||

// const combine = (
//     input1: number | string /* Union Types */,
//     input2: number | string,
//     resultConversion: 'as-number' | 'as-text' /* Literal Types */
//   )

// Type Aliases
type Combineble = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

const combine = (
  input1: Combineble,
  input2: Combineble,
  resultConversion: ConversionDescriptor
) => {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;

  //   if (resultConversion === 'as-number') {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
};

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Charan', 'Reddy', 'as-text');
console.log(combinedNames);
