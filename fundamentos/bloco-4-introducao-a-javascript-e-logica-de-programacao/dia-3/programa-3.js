let array = ['java', 'css', 'python', 'htsafdasdfasdml',  'javascript'];

let count = array[0];

for(let index = 0; index<array.length; index+=1){
  if(array[index].length > count.length){
    count = array[index];
  }
}
console.log(count);