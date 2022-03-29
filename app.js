computerScore = 0;
userScore = 0;
computerNumber = 0;
userNumber = 0;

function player(){
    do {
        var numbers = Math.floor(Math.random() * 10) +1;
        userNumber = userNumber + numbers;
        alert(`The number you got was ${numbers}. Your new total is ${userNumber}`)
        var play = prompt(`Would you like to go again? If so, type "Yes".`)
    } while ((userNumber <= 19) && (play == "Yes"))
    return userNumber
}


function computer(){
    do {
        var numbers = Math.floor(Math.random() * 10) +1;
        computerNumber = computerNumber + numbers;
        alert(`The Computer got ${numbers}. The Computers new total is ${computerNumber}`)
    } while (computerNumber <= 16)
    return computerNumber
}



function compare(userNumber,computerNumber,computerScore) {
    if ((computerNumber > 20) && (userNumber < 21) && (userNumber > computerNumber)) {
        alert(`Congratulations! You won with a score of ${userNumber}.`)
        userScore++
        alert(`The score is; Computer: ${computerScore} Human: ${userScore}`)
    } else if ((computerNumber > 20) && (userNumber < 21) && (computerNumber > userNumber)) {
        alert(`Congratulations! You won with a score of ${userNumber}`)
        userScore++
        alert(`The score is; Computer: ${computerScore} Human: ${userScore}`)
    } else if ((computerNumber < 21) && (userNumber < 21) && (userNumber > computerNumber)) {
        alert(`Congratulations! You won with a score of ${userNumber}`)
        userScore++
        alert(`The score is; Computer: ${computerScore} Human: ${userScore}`)
    } else if ((computerNumber < 21) && (userNumber < 21) && (computerNumber > userNumber)) {
        alert(`Uh oh! The computer won with a score of ${userNumber}`)
        computerScore++
        alert(`The score is; Computer: ${computerScore} Human: ${userScore}`)
    } else if ((computerNumber < 20) && (userNumber < 21) && (computerNumber == userNumber)) {
        alert(`WOW! You tied with a score of ${userNumber}!`)
        alert(`The score is; Computer: ${computerScore} Human: ${userScore}`)
    } else { 
        alert(`Uh oh! You lost with a score of ${userNumber}.`);
        computerScore++
        alert(`The score is; Computer: ${computerScore} Human: ${userScore}`)
    }
    return computerScore

}
function score (compare){
    if (computerScore == 1) {
        var cscore = cscore++
        alert (`Computer Won`)
    } else {
        var uscore = uscore++
        alert (`Player Won`)
    }
    
}

score(compare(player(), computer()))