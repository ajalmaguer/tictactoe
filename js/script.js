var display = document.getElementById('display')

var r1c1 = document.getElementById('11')
var r1c2 = document.getElementById('12')
var r1c3 = document.getElementById('13')
var r2c1 = document.getElementById('21')
var r2c2 = document.getElementById('22')
var r2c3 = document.getElementById('23')
var r3c1 = document.getElementById('31')
var r3c2 = document.getElementById('32')
var r3c3 = document.getElementById('33')

var resetButton = document.getElementById('reset')

var row1
var row2
var row3
var col1
var col2
var col3
var diag1
var diag2


var currentTurn = "x"

//xscore = [row 1, row 2, row3, col1, col2, col3, diag1, diag2]
var xscore = [0,0,0,0,0,0,0,0]
var oscore = [0,0,0,0,0,0,0,0]
var win = false


r1c1.addEventListener("click", placeMark)
r1c2.addEventListener("click", placeMark)
r1c3.addEventListener("click", placeMark)
r2c1.addEventListener("click", placeMark)
r2c2.addEventListener("click", placeMark)
r2c3.addEventListener("click", placeMark)
r3c1.addEventListener("click", placeMark)
r3c2.addEventListener("click", placeMark)
r3c3.addEventListener("click", placeMark)

resetButton.addEventListener("click", reset)

function placeMark () {
  if(win == false) {
    if (!this.innerHTML) { // if the box is empty
      this.innerHTML = currentTurn //place the current player's mark
    }
    updateScore()//update score
    //check score
    nextTurn() //change player
    updateDisplay()
    console.log("end turn")
  }
}

var bleh = "x"
function updateScore() {
  row1 = r1c1.innerHTML + r1c2.innerHTML + r1c3.innerHTML
  row2 = r2c1.innerHTML + r2c2.innerHTML + r2c3.innerHTML
  row3 = r3c1.innerHTML + r3c2.innerHTML + r3c3.innerHTML
  col1 = r1c1.innerHTML + r2c1.innerHTML + r3c1.innerHTML
  col2 = r1c2.innerHTML + r2c2.innerHTML + r3c2.innerHTML
  col3 = r1c3.innerHTML + r2c3.innerHTML + r3c3.innerHTML
  diag1 = r1c1.innerHTML + r2c2.innerHTML + r3c3.innerHTML
  diag2 = r1c3.innerHTML + r2c2.innerHTML + r3c1.innerHTML

  var board = row1+row2+row3
  console.log(row1)
  console.log(row2)
  console.log(row3)
  console.log("board length = ", board.length)

  oscore = [stringToScore(row1,"o"),
          stringToScore(row2,"o"),
          stringToScore(row3,"o"),
          stringToScore(col1,"o"),
          stringToScore(col2,"o"),
          stringToScore(col3,"o"),
          stringToScore(diag1,"o"),
          stringToScore(diag2,"o")]

  xscore = [stringToScore(row1,"x"),
          stringToScore(row2,"x"),
          stringToScore(row3,"x"),
          stringToScore(col1,"x"),
          stringToScore(col2,"x"),
          stringToScore(col3,"x"),
          stringToScore(diag1,"x"),
          stringToScore(diag2,"x")]
  console.log(xscore)
  console.log("w wins? ", xscore.indexOf(3)!==-1)
  console.log("o wins? ", oscore.indexOf(3)!==-1)
  if (xscore.indexOf(3)!==-1) {
    win = true
    console.log("x wins!")
    display.innerHTML = "x wins!"
  } else if (oscore.indexOf(3)!==-1) {
    console.log("o wins!")
    display.innerHTML = "o wins!"
    win = true

  } else if (board.length === 9) {
    console.log("tie game")
    display.innerHTML = "Tie game, womp womp"
    win = true
  }
  else {

  }
}

function stringToScore(arr, player) {
  var score = 0
  for (i=0; i<arr.length; i++) {
    if(arr[i]==player) {
      score++
    }
  }
  return score
}

function updateDisplay () {
  if(win == false) {
    console.log("updateDisplay ran")
    display.innerHTML = "Go, " + currentTurn
  }
}

function nextTurn () {
  if (currentTurn == "x") {
    currentTurn = "o"
  } else {
    currentTurn = "x"
  }
}

function reset () {
  // if(win === true) {
    r1c1.innerHTML = ""
    r1c2.innerHTML = ""
    r1c3.innerHTML = ""
    r2c1.innerHTML = ""
    r2c2.innerHTML = ""
    r2c3.innerHTML = ""
    r3c1.innerHTML = ""
    r3c2.innerHTML = ""
    r3c3.innerHTML = ""
    win = false
    updateScore()
    updateDisplay()
  // }
}

