//Imports
import User from './User.js';
//Objects
const user = new User(); // redirect to game PAGE
//Elements
const button = document.querySelector('#button');
const logOut = document.querySelector('#logout');
const loginForm = document.querySelector('#loginForm');
const loadForm = document.querySelector('#loadForm');
const formContent = document.querySelector('#formContent');

//listeners

formContent.addEventListener('dblclick', (e) => {
    const gameId = e.target.getAttribute("for");
    user.setActualMaze(gameId);
    window.location.href = "gamepage.html";
});

logOut.addEventListener('click', (e) => {
    e.preventDefault();
    user.logOutUser();
    formContent.innerHTML = "";
    toggleForms();
})

button.addEventListener('click', (e) => {
    e.preventDefault();
    user.loginUser().then(response => {
        console.log(response)
        displayGames();
        toggleForms();
    });
})

window.addEventListener('load', (e) => {
    toggleForms();
    displayGames();
})

//Js Behavior
const toggleForms = () => {
    if (!user.getUserInfo()) {
        loginForm.style.display = "flex";
        loadForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        loadForm.style.display = "flex";
    }
}

const displayGames = () => {
    if (user.getUserInfo() == null) return;
    const maxGames = 3;

    const games = user.getUserInfo().games || null;
    
    if (games.length === maxGames) {
        for (let game of games) {
            const newButton = document.createElement('input');
            const newLabel = document.createElement('label');
            newLabel.setAttribute("for", game);
            newLabel.textContent = game;
            newButton.type = "radio";
            newButton.name = "savedGame";
            newButton.id = game;

            formContent.appendChild(newButton);
            formContent.appendChild(newLabel);
            formContent.appendChild(document.createElement("br"));
        }
    } else {
        for (let i = 0; i < maxGames ;i++) {

            let game = games[i] || `_noId${i}`;

            const newButton = document.createElement('input');
            const newLabel = document.createElement('label');
            newLabel.setAttribute("for", game);
            newLabel.textContent = games[i] || "New Game";
            newButton.type = "radio";
            newButton.name = "savedGame";
            newButton.id = game;

            formContent.appendChild(newButton);
            formContent.appendChild(newLabel);
            formContent.appendChild(document.createElement("br"));
        }
    }
}