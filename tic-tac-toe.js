const fields = document.getElementsByClassName('js-table-field');
let circleFields = [];
let crossFields = [];
let evaluationForPlayer;
for (let i = 0; i < fields.length; i++) {
  fields[i].addEventListener('click', () => {
    playerMove(i);
  });
}
isPlayingPlayerA = true;
document.querySelector('.info-heading-js').innerHTML = ('Player x pick your move!');
document.querySelector('.info-heading-js').classList.add('x-info-heading');


function playerMove (i) {
  if (!fields[i].classList.contains('play-stopped-field')) {
    if (!fields[i].innerHTML ) {
      if (isPlayingPlayerA) {
          fields[i].innerHTML = 'x';
          isPlayingPlayerA = false;
          document.querySelector('.info-heading-js').innerHTML = ('Player o pick your move!');
          document.querySelector('.info-heading-js').classList.add('o-info-heading');
          document.querySelector('.info-heading-js').classList.remove('x-info-heading');
          fields[i].classList.add('full-field-cross', 'full');
          crossFields.push(i);
          console.log(i)
          evaluationForPlayer = 'x'
          evaluation(crossFields);

      } else {
        fields[i].innerHTML = 'o';
        isPlayingPlayerA = true;
        document.querySelector('.info-heading-js').innerHTML = ('Player x pick your move!');
        document.querySelector('.info-heading-js').classList.remove('o-info-heading');
        document.querySelector('.info-heading-js').classList.add('x-info-heading');
        fields[i].classList.add('full-field-circle', 'full');
        circleFields.push(i);
        console.log(i)
        evaluationForPlayer = 'o'
        evaluation(circleFields);
      }

    

    }
  }
}

function evaluation (fieldsOfPlayers) {
  let com1 = [0,1,2]
  const isCom1 = com1.every(function(num) {
    return fieldsOfPlayers.includes(num);
  });
  console.log(com1);
  stopPlayWinner(com1, isCom1);

  let com2 = [3,4,5]
  const isCom2 = com2.every(function(num) {
    return fieldsOfPlayers.includes(num);
  });
  console.log(com2);
  stopPlayWinner(com2, isCom2);

  let com3 = [6,7,8]
  const isCom3 = com3.every(function(num) {
    return fieldsOfPlayers.includes(num);
  });
  console.log(com3);
  stopPlayWinner(com3, isCom3);

  let com4 = [0,3,6]
  const isCom4 = com4.every(function(num) {
    return fieldsOfPlayers.includes(num);
  });
  console.log(com4);
  stopPlayWinner(com4, isCom4);

  let com5 = [1,4,7]
  const isCom5 = com5.every(function(num) {
    return fieldsOfPlayers.includes(num);
  });
  console.log(com5);
  stopPlayWinner(com5, isCom5);

  let com6 = [2,5,8]
  const isCom6 = com6.every(function(num) {
    return fieldsOfPlayers.includes(num);
  });
  console.log(com6);
  stopPlayWinner(com6, isCom6);

  let com7 = [0,4,8]
  const isCom7 = com7.every(function(num) {
    return fieldsOfPlayers.includes(num);
  });
  console.log(com7);
  stopPlayWinner(com7, isCom7);

  let com8 = [2,4,6]
  const isCom8 = com8.every(function(num) {
    return fieldsOfPlayers.includes(num);
  });
  console.log(com8);
  stopPlayWinner(com8, isCom8);
  console.log(fields);
  const everyIsFull = Array.from(fields).every((button) => {
    return button.classList.contains('full');
  });
  if (everyIsFull) {
    Array.from(fields).forEach((button) => {
      button.classList.add('play-stopped-field');
    })
    document.querySelector('.info-heading-js').innerHTML = 'It is tie. Play again!';
  }
}




function stopPlayWinner (com, isCom) {
  if (isCom) {
    document.querySelector('.info-heading-js').innerHTML = (`Player ${evaluationForPlayer} wins!`);
    document.querySelector('.info-heading-js').classList.add(`${evaluationForPlayer}-info-heading`);
    for (let i=0; i<fields.length ; i++) {
      fields[i].classList.add('play-stopped-field'); 
    }
    com.forEach(i => {
      console.log(i)
      fields[i].classList.add('won-field');

    });
  } 
} 


document.querySelector('.js-again-button').addEventListener('click', () => resetGame());
function resetGame () {
  circleFields = [];
  crossFields = [];
  isPlayingPlayerA = true;
  document.querySelector('.info-heading-js').innerHTML = ('Player x pick your move!');
  document.querySelector('.info-heading-js').classList.add('x-info-heading');
  for (let i = 0; i < fields.length; i++) {
    fields[i].classList.remove('play-stopped-field', 'full-field-cross', 'full-field-circle', 'won-field', 'full' );
    fields[i].innerHTML = '';
    fields[i].removeEventListener('click', playerMove);
    fields[i].addEventListener('click', () => playerMove(i));
  }
}