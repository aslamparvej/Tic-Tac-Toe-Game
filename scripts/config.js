function openPlayerConfig(event) {
  editedPlayer = event.target.dataset.playerid;
  playerConfigElement.style.display = "block";
  backdropConfigElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigElement.style.display = "none";
  backdropConfigElement.style.display = "none";
  formConfigElement.firstElementChild.classList.remove("error");
  errorMessageElement.textContent = "";
  inputConfigElemet.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("player-name").trim();

  if (!enteredPlayerName) {
    // classList.add('className') is used to add a new class
    event.target.firstElementChild.classList.add("error");
    errorMessageElement.textContent = "Enter a valid name!";
    return;
  }

  const updatedPlayerElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
