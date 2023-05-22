var finish = Math.floor(Math.random() * 9)
var nail =  Math.floor(Math.random() * 9)


if (nail === finish){
    nail = Math.floor(Math.randon() * 9)
}

var tries = 5;
const cycle = (square) => {
  
    if (tries === 0){
        alert("please restart the game")
    }else if(square === finish){
        document.getElementById(square).innerHTML = '🏁'
        alert("you win!")
        tries = 0
    }else if (square === nail){
        document.getElementById(square).innerHTML = '⚔️'
        alert("game over")
        tries = 0
    }else{
        document.getElementById(square).innerHTML = '🚩'
    }
}
