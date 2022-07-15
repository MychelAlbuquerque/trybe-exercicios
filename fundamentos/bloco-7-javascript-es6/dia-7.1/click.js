const button = document.querySelector('button');
const show = document.querySelector('#show');
let count = 0;
button.addEventListener('click',function(){
  count +=1;
  show.innerHTML = count;
})