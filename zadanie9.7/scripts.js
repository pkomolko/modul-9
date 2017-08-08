var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
  switch(gameState) {
    case 'started':
        console.log('gra rozpoczeta, ustawiam style');
        newGameElem.style.display = 'none'; // chowanie przycisku 'New game'
        pickElem.style.display = 'block'; // wyswietlenie planszy
        resultsElem.style.display = 'block'; // wyświetlenie wyników
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
};

 setGameElements();

 var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
  console.log('kliknieto przycisk new game');
  player.name = prompt('Please enter your name', 'imię gracza');
  console.log('zapisano imie: ' + player.name);

  if (player.name) {
    console.log('imie nie jest puste, ustawiam ');
    player.score = computer.score = 0;
    gameState = 'started';
    console.log('gra rozpoczeta');
    setGameElements();
    console.log('ustawiono plansze');

    playerNameElem.innerHTML = player.name;
    console.log('ustawilem imie gracza');
    setGamePoints(); 
    console.log('ustawiono wyniki graczy');
  } 

};

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
};

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');


function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; 
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";

        console.log('Wynik gracza przed: ' + player.score);
        player.score++;
        console.log('Wynik gracza po: ' + player.score);

    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        console.log('Wynik kompa przed: ' + computer.score);
        computer.score++;
        console.log('Wynik kompa po: ' + computer.score);
    }

};


function playerPick(playerPick) {
    console.log('Gracz wybral: ' + playerPick);

    var computerPick = getComputerPick();
    console.log('Komputer wybral: ' + computerPick);

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    console.log('pokazono wybory graczy');

    checkRoundWinner(playerPick, computerPick);

    setGamePoints();

    checkIfGameEnded();

};

function setGamePoints() {
    console.log('ustawiam wynik gracza na: ' + player.score);
    playerPointsElem.innerHTML = player.score;
    console.log('ustawiam wynik komputera na: ' + computer.score);
    computerPointsElem.innerHTML = computer.score;
};

function checkIfGameEnded (){   

    if(player.score === 10) {
        alert("Wygral: " + player.name);
        gameState = 'ended';
        setGameElements();
    } else if (computer.score == 10) {
        alert("Wygral komputer");
        gameState = 'ended';
        setGameElements();
    }
}






