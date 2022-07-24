const criaFunc = (name) => {
  const emailMaker = (a) => {
    let email = a.replace(' ', '_');
    email = email.toLowerCase();
    email = `${email}@trybe.com`
    return email
  }
  let objeto = {
    nome: name,
    email: (emailMaker(name))
  }
  return objeto;
}
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees(criaFunc));

// Exercicio 2 

const sorteio = (number, random) => {
  let result = 0
  random === number ? result = true : result = false;
  console.log(result)
  return result
}

const hof = (number, sorteio) => {
  const random = (Math.floor(Math.random() * (5 - 1 + 1)) + 1);
  console.log(random);
  if (sorteio(number, random)) return 'Parabéns você ganhou';
  return 'Tente novamente';
}
console.log(hof(3, sorteio));
