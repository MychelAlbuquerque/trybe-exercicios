let primo = false;
let number = 2;
let maior = 0;

for (let secondIndex = 2; secondIndex <= 50; secondIndex += 1) {
  for (let index = 2; index < number; index += 1) {
    if (!(number % index)) {
      primo = false;
      break;
    } else primo = true;
  }
  if (primo) maior = number;
  number += 1;
}
console.log(maior);