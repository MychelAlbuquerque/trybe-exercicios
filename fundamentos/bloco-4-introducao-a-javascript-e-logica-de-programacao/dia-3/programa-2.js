let word ='banana'
let array = word.split('')
let invert = []
let secondIndex = 0;


for (let i = array.length-1; i >= 0; i--) {
  invert[secondIndex] = array[i];
  secondIndex += 1;
}
console.log(array);
console.log(invert);

