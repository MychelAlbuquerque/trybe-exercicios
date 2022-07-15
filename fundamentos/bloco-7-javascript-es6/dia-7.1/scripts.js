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



//Exercicio 2
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// const ordena = (array) => {
//   array = array.sort((a, b) => a - b);
//   console.log(`Os números ${array} se encontram ordenados de forma crescente!"`);
// }
// ordena(oddsAndEvens);

 const fatorial = (num) => {
   for(let index=num-1; index > 0; index-=1){
     num *= index; 
     console.log(num);
   }
 } 
 fatorial(4)