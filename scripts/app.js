const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name:'',
        symbol: 'X'
    },
    {
        name:'',
        symbol: 'O'
    }
];

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn')
const startNewGameBtnElement = document.getElementById('start-game-btn');
const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElements = document.getElementById('game-board');

const playerConfigElement = document.getElementById('config-overlay');
const backdropConfigElement = document.getElementById('backdrop');

const formConfigElement = document.querySelector('form');
const errorMessageElement = document.getElementById('error-message');
const inputConfigElemet = document.getElementById('player-name');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');
const gameAreaElement = document.getElementById('active-game');

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);
cancelConfigBtnElement.addEventListener('click',closePlayerConfig);

backdropConfigElement.addEventListener('click',closePlayerConfig);
formConfigElement.addEventListener('submit',savePlayerConfig);

startNewGameBtnElement.addEventListener('click',startNewGame);

for(const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click', selectGameField);
}
