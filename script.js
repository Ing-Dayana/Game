const options = document.querySelectorAll(".options i");
const score = document.querySelector("#score");
const result = document.querySelector("#result");
const lineVertical = document.querySelector(".line-vertical");
const resultTotal = document.querySelector(".result-total");
const userChoiceText = document.getElementById("user-choice-text");
const computerChoiceText = document.getElementById("computer-choice-text");


let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

options.forEach(option => {
    option.addEventListener("click", function() {
        // Generar una opción aleatoria por la computadora
        const computerChoice = Math.floor(Math.random() * 3);
        const computerOption = options[computerChoice];
        
        // Determinar el resultado final
        let message;
        if (this.classList[1] === "fa-hand-back-fist" && computerOption.classList[1] === "fa-hand-peace") {
        message = "Ganaste";
        playerScore++;
        } else if (this.classList[1] === "fa-hand" && computerOption.classList[1] === "fa-hand-back-fist") {
        message = "Ganaste";
        playerScore++;
        } else if (this.classList[1] === "fa-hand-peace" && computerOption.classList[1] === "fa-hand") {
        message = "Ganaste";
        playerScore++;
        } else if (this.classList[1] === computerOption.classList[1]) {
        message = "Empate";
        } else {
        message = "Perdiste";
        computerScore++;
        }
        
        // Determinar el texto de la opción elegida por el usuario
        let userSelection;
        if (this.classList[1] === "fa-hand-back-fist") {
            userSelection = "rock";
        } else if (this.classList[1] === "fa-hand") {
            userSelection = "paper";
        } else if (this.classList[1] === "fa-hand-peace") {
            userSelection = "scissors";
        }
         // Determinar el texto de la opción elegida por la computadora
        let computerSelection;
        if (computerOption.classList[1] === "fa-hand-back-fist") {
            computerSelection = "rock";
        } else if (computerOption.classList[1] === "fa-hand") {
            computerSelection = "paper";
        } else if (computerOption.classList[1] === "fa-hand-peace") {
            computerSelection = "scissors";
        }

        userChoiceText.textContent = userSelection === "rock" ? "Roca" : userSelection === "paper" ? "Papel" : "Tijeras";
        computerChoiceText.textContent = computerSelection === "rock" ? "Roca" : computerSelection === "paper" ? "Papel" : "Tijeras";
        
        // Mostrar el resultado
        result.textContent = message;
        score.textContent = `${playerScore} - ${computerScore}`;
        
        // Actualizar los iconos
        document.querySelector("#user-choice").classList = this.classList;
        document.querySelector("#computer-choice").classList = computerOption.classList;

        roundsPlayed++;

        // Reiniciar el juego después de tres partidas
        if (roundsPlayed === 4) {
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
        score.textContent = `${playerScore} - ${computerScore}`;
        result.textContent = "";
        document.querySelector("#user-choice").classList = "";
        document.querySelector("#user-choice-text").textContent = "";
        document.querySelector("#computer-choice").classList = "";
        document.querySelector("#computer-choice-text").textContent = "";
        userChoiceText.textContent = "";
        computerChoiceText.textContent = "";
        resultTotal.style.display = "none";
        }
        if (roundsPlayed === 4) {
        return;
        }
        // Ocultar Clases para mensaje ganador/perdedor
        if (message) {
        result.textContent = "";
        lineVertical.style.display = "block";
        resultTotal.style.display = "flex";

        setTimeout(function() {
            result.textContent = message;
            lineVertical.style.display = "none";
            resultTotal.style.display = "none";
        }, 1000);
        }
        setTimeout(function() {
        lineVertical.style.display = "block";
        resultTotal.style.display = "none";
        result.textContent = "";
        }, 2000);
    });
});






