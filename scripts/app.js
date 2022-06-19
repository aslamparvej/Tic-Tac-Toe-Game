let editedPlayer = 0;

const playres = [
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

const playerConfigElement = document.getElementById('config-overlay');
const backdropConfigElement = document.getElementById('backdrop');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn')

const formConfigElement = document.querySelector('form');
const errorMessageElement = document.getElementById('error-message');
const inputConfigElemet = document.getElementById('player-name');

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
backdropConfigElement.addEventListener('click',closePlayerConfig);

formConfigElement.addEventListener('submit',savePlayerConfig);
