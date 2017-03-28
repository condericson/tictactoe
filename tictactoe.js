var squares = document.getElementsByTagName("td");
var turn;
var score;
var number_of_moves;

init_game();

document.getElementById('playagain').addEventListener("click", function(event) {
    start_new_game();
})


function init_game() {
    add_click_listeners();
    start_new_game();
}

/*helper methods*/

//Good learning function
function clear_boxes() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
  }
}


function start_new_game() {
        clear_boxes();
        turn = "X";
        xPlacements = [];
        oPlacements = [];
        document.getElementById('playagain').style.display = 'none';
        document.getElementById('catsgame').style.display = 'none';
        document.getElementById('wins').style.display = 'none';
}

//Good learning function
function add_click_listeners() {
    for (var j = 0; j < squares.length; j++) {
        squares[j].addEventListener("click", function(event) {
            var targetedSquare = event.target.getAttribute('class');
            checkStatus(event.target, targetedSquare); 
      });
    }
}

//Good learning function
function checkStatus(square, squareNumber) {
    if(turn == "X") {
        number_of_moves = number_of_moves + 1;
        if (square.textContent.length > 0) {
            return alert("Space already taken");
        }
        square.textContent = turn;
        xPlacements = xPlacements.concat(squareNumber);
        console.log(xPlacements);
        checkPatterns(xPlacements, winningPatterns, turn);
    }
    else if(turn == "O") {
        number_of_moves = number_of_moves + 1;
        if (square.textContent.length > 0) {
            return alert("Space already taken");
        }
        square.textContent = turn;  
        console.log(squares[j]);
        oPlacements = oPlacements.concat(squareNumber);
        console.log(oPlacements);
        checkPatterns(oPlacements, winningPatterns, turn);
    }
}


//Good training function
function alternate_turn() {
    if (turn == "X") {
        turn = "O";
    } 
    else if (turn == "O") {
        turn = "X";
    }
    return turn;
}






//Check if win matrix
var winningPatterns = {
  across1: [1, 2, 3],
  across2: [4, 5, 6],
  across3: [7, 8, 9],
  down1: [1, 4, 7],
  down2: [2, 5, 8],
  down3: [3, 6, 9],
  diagonal1: [1, 5, 9],
  diagonal2: [3, 5, 7]
};

/*var xPlacements = [1, 2, 3, 4];
var oPlacements = [3, 6, 9];*/

function checkPatterns(placementSet, winningPatterns, turn) {
  var set = placementSet;
  var matching = 0;
    for (var key in winningPatterns) {
    var currentPattern = winningPatterns[key];
    for(j = 0; j < currentPattern.length; j++) {
        for(k = 0; k < set.length; k++) {
            if(set[k] == currentPattern[j]) {
                matching += 1
            }
        };
    };
    if (matching === 3) {
        console.log(matching, turn);
        document.getElementById('winner').textContent = turn;
        document.getElementById('wins').style.display = 'inline';
        document.getElementById('playagain').style.display = 'inline';
        return {matching, turn};
    }
    else {
        matching = 0;
    }
  };
  if (set.length == 5) {
    document.getElementById('playagain').style.display = 'inline';
    document.getElementById('catsgame').style.display = 'inline';
  }
    console.log("alternate_turn")
    alternate_turn();
};