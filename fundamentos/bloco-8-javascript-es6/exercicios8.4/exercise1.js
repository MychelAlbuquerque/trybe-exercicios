const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];


let newArray = arrays.reduce((acc, curr) => acc.concat(curr))
console.log(newArray);

