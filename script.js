let playerName;
let turns;
let number;
const refDisplayResult = document.querySelector("#display");
function random() {    
    turns = 0;
    playerName = document.querySelector("input").value;
    if (playerName == "") {
        refDisplayResult.innerText = "Kindly Enter a Player Name";
        refDisplayResult.classList.add("text-white")
        return;
    }
    const refButtons=document.getElementsByClassName("btn-circle");
    for(let i=0;i<refButtons.length;i++){
        refButtons[i].removeAttribute("disabled","disabled");
    }
    number = Math.trunc(Math.random() * (40) + 1);
    document.getElementsByTagName("h3")[0].innerText=`Welcome to Blue Balls game ${playerName}`
}

function reload(){
    window.location.reload();
}

function displayNoWin() {
    
    refDisplayResult.classList.add("text-danger")
    refDisplayResult.innerText = `Better luck next time ${playerName}, you used your 6 turns`;

}

function game(x) {
    if(playerName==undefined){
        refDisplayResult.classList.add("text-white")
        refDisplayResult.innerText="Player is undefined"
        return
    }
    turns++;
    if (turns <= 6) {
        //x.innerText<number?x.classList.add("btn-warning"):x.innerText>number?x.classList.add("btn-danger"):x.classList.add("btn-success")
        if (number > x.innerText) {
            x.classList.add("btn-warning");
            x.classList.add("disabled");
            if (turns == 6) {
                displayNoWin();
            }
        }
        else if (number < x.innerText) {
            x.classList.add("btn-danger");
            x.classList.add("disabled")
            if (turns == 6) {
                displayNoWin();
            }
        }
        else {
            x.classList.add("btn-success")
            refDisplayResult.classList.add("text-success")
            refDisplayResult.innerText = `Congratulations!!! ${playerName}, you won in ${turns} turns`;
        }

    }
    else {

        displayNoWin();
    }
}