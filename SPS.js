let userScore = 0;
let compScore = 0;

const userScorepara = document.querySelector("#userScore");
const compScorepara = document.querySelector("#compScore");


const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");

const compChoice =() => {
    // Computer will generate its choice
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

const playGame = (userChoice) => {
console.log("User-Choice", userChoice);
const computerChoice = compChoice();
console.log("Computer-Choice", computerChoice);

if(userChoice === computerChoice){
 console.log("Draw");
 msg.innerText = "Match Draw";
 msg.style.backgroundColor = "black";
}
else{
    let userWin= true;
    if(userChoice === "rock"){
        userWin = computerChoice === "paper" ? false : true;
} 
else if(userChoice === "paper")
    
    {
    userWin = computerChoice === "scissors" ? false : true;

}
else {
userWin = computerChoice === "rock" ? false : true;
}
 showWinner(userWin, userChoice, computerChoice);
}
};


choices.forEach((choice) =>{
    choice.addEventListener("click", () => { 
    const userChoice= choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
    })
})

showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "Green";
        userScore++;
        userScorepara.innerText= userScore;
    }
    else{
        compScore++;
        compScorepara.innerText= compScore;
        console.log("You Lose!");
        msg.innerText = `You Lose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}