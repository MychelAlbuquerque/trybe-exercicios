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


// Exercicio 1 parte 2
//  const fatorial = (num) => {
//    for(let index=num-1; index > 0; index-=1){
//      num *= index; 
//      console.log(num);
//    }
//  } 
//  fatorial(4)


// Exercicio 2 parte 2
// const word ='Antônio foi no banheiro e não sabemos o que aconteceu'
// let array =[];
// const splitSentence = (sentence) => {
//   array = sentence.split(' ');
//   array = array.sort();
//   console.log(array[0])
// }
// splitSentence(word)

//Exercicio 4 parte 2
const tryber = (nome) => `Tryber ${nome} aqui!`
const hab = (outra) => {
  const skills = ['JS', 'Css', 'Html'];
  console.log(`${outra}
Minhas três habilidades são:
  - ${skills[0]}
  - ${skills[1]}
  - ${skills[2]}`)
}
hab(tryber('mychel'));