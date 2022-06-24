let player = 'damA';
player = player.toUpperCase();


switch (player){
  case 'REI':
    console.log('Qualquer direção; Uma casa por vez.')
    break;
  case 'DAMA':
    console.log('Qualquer direção.')
    break;
  case 'TORRE':
    console.log('Vertical e horizontal.')
    break;
  case 'CAVALO':
    console.log('Movimento em L.')
    break;
  case 'BISPO':
    console.log('Diagonal.')
    break;
  case 'PEAO':
    console.log(`
    Primeiro movimento: até 2 casas para frente. 
    Normal: 1 casa para frente.
    Captura: 1 diagonal.`)
    break;  
}

