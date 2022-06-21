let a = 9;
let b = 19;
let c = 9;
let maior = 'Números iguais';


console.log('-------------------------');
console.log('# Programa 7 #');
console.log('-------------------------');
if (a==b && b==c){
  console.log(maior); 
} else {
  if (a>b && a>c) {
      maior = `O maior é ${a}`;
    } else if (b>a && b>c) {
      maior = `O maior é ${b}`;
    } else {
    maior = `O maior é ${c}`; 
  }
  console.log(maior);
} 
console.log('-------------------------');
