                                                                                                                                                                           window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 9,
  medium: 7,
  hard: 4
};

// To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'nakakapagpabagabag',
  'mamasamasa',
  'dkapanipaniwala',
  'kagilagilalas',
  'kumukutikutitap',
  'kinakailangan',
  'pamamatnubay',
  'kinahihinatnan',
  'pinakipakinabangan',
  'pinagpinamamagaspasan',
  'kumukutikutitap',
  'kansunsilyo',
  'nagsisiusyosohan',
  'antesedente',
  'halakhak',
  'humahalimuyak',
  'sulatroniko',
  'hatinig',
  'panginain',
  'pantablay',
  'miktinig',
  'kawingan',
  'initsigan',
  'danumsigwasan',
  'bilnuran'
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus);
}

// Start match
function startMatch() {
  if (matchWords()) {
  
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;

  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {

  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
    ;
  } else {
    message.innerHTML = '';
    return false;
    alert
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    myFunction1();
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
   

  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!'; 
    score = -1;
     myFunction();
  }
}

function myFunction() {
  document.body.style.backgroundColor = "#f3f3f3";
  document.getElementById("gg").classList.add('background-horror');
}

function myFunction1() {
  document.getElementById("gg").classList.remove('background-horror');
  document.body.style.backgroundColor = "#000000";
  
}