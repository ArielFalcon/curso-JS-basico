let opp = "paper"
let user = "rock"

function combat (){
    let res 
    switch (user) {
        case "paper":
            if (opp == "scissors") {
                res = "you lose"
            }
            else if (opp == "rock"){
                res = "you win"
            }
            else {res = "TIE"}
            break;

        case "rock":
            if (opp == "scissors") {
                res = "you win"
            }
            else if (opp == "paper"){
                res = "you lose"
            }
            else {res = "TIE"}
            break;

        case "scissors":
            if (opp == "rock") {
                res = "you lose"
            }
            else if (opp == "paper"){
                res = "you win"
            }
            else {res = "TIE"}
            break;    

        default:
            break;
    }
    console.log(res)
}

combat()