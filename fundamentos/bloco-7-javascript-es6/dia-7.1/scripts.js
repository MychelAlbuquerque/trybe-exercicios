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
const ordena = array => {
  let newArray = [0];
  for(let index=0; index<oddsAndEvens.length; index+=1) {
    let count = 0;
    oddsAndEvens[index] < count && (count = oddsAndEvens[index]);
  }
} 


console.log(oddsAndEvens); // será necessário alterar essa linha 😉


