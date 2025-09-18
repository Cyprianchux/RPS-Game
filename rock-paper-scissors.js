// Load the score and total played (if available)
let totalPlayed = JSON.parse(localStorage.getItem('totalplayed')) || 0;

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  draws: 0
};

// UI setup on start of the game
function pickOutput() {
  const pickHand = document.querySelector('.js-pick');
  pickHand.innerHTML = `Pick one
    <img class="pickAhand" src="images/rock.png" alt="Rock">
    <img class="pickAhand" src="images/paper.png" alt="Paper">
    <img class="pickAhand" src="images/scissors.png" alt="Scissors">
    to start playing`;
}

pickOutput();

function getTotalPlayed() {
  const played = document.querySelector('.js-totalPlayed');
  if (totalPlayed === 1) {
    played.textContent = `You have played ${totalPlayed} time`;
  } else if (totalPlayed === 10) {
    played.textContent = `You have played ${totalPlayed} times. The game will RESTART shortly`
  } else {
    played.textContent = `You have played ${totalPlayed} times`;
  }
}
getTotalPlayed();

function showResetPopUp() {
  const popup = document.querySelector('.js-showResetPopUp');
  popup.textContent = 'GAME OVER!';
  setTimeout(() => {
    popup.textContent = ''; // Clear after 3s
  }, 5000);
}

function updateScore() {
  document.querySelector('.js-result')
  .innerHTML = `${score.wins} wins, ${score.losses} losses, ${score.draws} draws`;
}
updateScore();

// Reset everything 
function resetScore() {
  score = { wins: 0, losses: 0, draws: 0 };
  totalPlayed = 0;
  localStorage.setItem('score', JSON.stringify(score));
  localStorage.setItem('totalplayed', JSON.stringify(totalPlayed));
}

/*
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.draws = 0;
  totalPlayed = 0;
}
*/

// Computer choice generator
function genRandomNumber() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return 'Rock';
  } else if (randomNumber < 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}
/*
function genRandomNumber () {
  let randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber <= 1) {
    computerMove = 'Scissors';
  }
}
*/
// let computerMove = '';
let outcome = '';

function getComputerMove(playerMove) {
  const computerMove = genRandomNumber();

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') outcome = 'DRAW!';
    else if (computerMove === 'Paper') outcome = 'YOU LOSE!';
    else outcome = 'YOU WIN!';
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Paper') outcome = 'DRAW!';
    else if (computerMove === 'Scissors') outcome = 'YOU LOSE!';
    else outcome = 'YOU WIN!';
  } else if (playerMove === 'Scissors') {
    if (computerMove === 'Scissors') outcome = 'DRAW!';
    else if (computerMove === 'Rock') outcome = 'YOU LOSE!';
    else outcome = 'YOU WIN!';
  }

  // Update score counts
  if (outcome === 'YOU WIN!') score.wins += 1;
  else if (outcome === 'YOU LOSE!') score.losses += 1;
  else score.draws += 1;

  // Update UI
  document.querySelector('.js-outcome').innerHTML = outcome;
  document.querySelector('.js-pick').innerHTML = `You 
    <img src="images/${playerMove}.png" alt="${playerMove}" class="imageIcon1">
    <img src="images/${computerMove}.png" alt="${computerMove}" class="imageIcon1"> 
    Computer`;

  updateScore();

  // Save progress
  localStorage.setItem('score', JSON.stringify(score));

  totalPlayed += 1;
  getTotalPlayed();
  localStorage.setItem('totalplayed', JSON.stringify(totalPlayed));

  // Game over check
  if (totalPlayed === 10) {
    // Show popup + disable game for 5s
    showResetPopUp();
    document.querySelectorAll('.imageButton').forEach(btn => btn.disabled = true);

    setTimeout(() => {
      // Re-enable game after 6s
      document.querySelectorAll('.imageButton').forEach(btn => btn.disabled = false);

      // Reset values
      resetScore();
      updateScore();
      pickOutput();
      document.querySelector('.js-totalPlayed').textContent = 'Pick a move to start playing again';
    }, 6000);
  }
}

/*
function getComputerMove (playerMove) {
  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      outcome = 'DRAW!';
    } else if (computerMove === 'Paper') {
      outcome = 'YOU LOSE!';
    } else if (computerMove === 'Scissors') {
      outcome = 'YOU WIN!';
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Paper') {
      outcome = 'DRAW!';
    } else if (computerMove === 'Scissors') {
      outcome = 'YOU LOSE!';
    } else if (computerMove === 'Rock') {
      outcome = 'YOU WIN!';
    }
  } else if (playerMove === 'Scissors') {
    if (computerMove === 'Scissors') {
      outcome = 'DRAW!';
    } else if (computerMove === 'Rock') {
      outcome = 'YOU LOSE!';
    } else if (computerMove === 'Paper') {
      outcome = 'YOU WIN!';
    }
  }
  
  if (outcome === 'YOU WIN!') {
    score.wins += 1;
  } else if (outcome === 'YOU LOSE!') {
    score.losses += 1;
  } else if (outcome === 'DRAW!') {
    score.draws += 1;
  }

  document.querySelector('.js-outcome')
    .innerHTML = `${outcome}`;
  
  document.querySelector('.js-pick')
    .innerHTML = `You 
    <img src="images/${playerMove}.png" alt="${playerMove}" class="imageIcon1">
    <img src="images/${computerMove}.png" alt="${computerMove}" class="imageIcon1"> 
    Computer`;

  updateScore();

  localStorage.setItem('score', JSON.stringify(score));

  totalPlayed += 1;

  getTotalPlayed ();

  localStorage.setItem('totalplayed', JSON.stringify(totalPlayed));

  if (totalPlayed < 10) {
    console.log('Game On');
  } else if (totalPlayed === 10) {
    resetScore();
    showResetPopUp();
   // alert('GAME OVER! You have played 10 times.');
  }
}
*/