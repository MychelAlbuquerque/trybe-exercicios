function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList =
  [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 31];

// Exercicio 1  
let days = document.getElementById('days');
for (let index in decemberDaysList) {
  let day = document.createElement('li');
  day.innerText = decemberDaysList[index];
  if (decemberDaysList[index] == 24 || decemberDaysList[index] == 25 || decemberDaysList[index] == 31) {
    day.className = 'day holiday';
  } else if (decemberDaysList[index] == 4 || decemberDaysList[index] == 11 || decemberDaysList[index] == 18 || decemberDaysList[index] == 25) {
    day.className = 'day friday';
  } else day.className = 'day';

  days.appendChild(day);

}


// Exercicio 2
function criaBotao(lblBotao, id) {
  let botao = document.createElement('button');
  botao.innerHTML = lblBotao;
  botao.id = id;
  let buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(botao);
}
criaBotao('Feriados', 'btn-holiday');

// Exercicio 3
let botao = document.getElementById('btn-holiday');
botao.addEventListener('click', corFeriado)

function corFeriado() {
  let day = document.querySelectorAll('.holiday');
  console.log(day);
  for (let index in day) {
    if (day[index].style.backgroundColor != 'blue') {
      day[index].style.backgroundColor = 'blue';
    } else {
      day[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}

