// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ordena = (array) => {
  array = array.sort((a, b) => a - b);
  console.log(`Os números ${array} se encontram ordenados de forma crescente!"`);
}
ordena(oddsAndEvens);