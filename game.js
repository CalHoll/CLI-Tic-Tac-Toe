// uses npm module 'prompt' for user requested input
var prompt = require('prompt');


var newGame = [
  [1, '|', 2,'|', 3],
  ['---','---','---'],
  [4, '|', 5,'|',  6],
  ['---','---','---'],
  [7, '|', 8,'|',  9]
];

var game = JSON.parse(JSON.stringify(newGame));
var gameOver = false;


// build out helper function to check if game is over
var checkWinner = function() {
  var char = game[0][0];

  // deal with all cases where a straight line could be created from top left:
  if (char === game[0][2] && char === game[0][4]) {
    console.log(char + ' WINS!');
    gameOver = true;
  };
  if (char === game[2][2] && char === game[4][4]) {
    console.log(char + ' WINS!');
    gameOver = true;
  };
  if (char === game[2][0] && char === game[4][0]) {
    console.log(char + ' WINS!');
    gameOver = true;
  };

  // deal with middle left row
  var char = game[2][0];
  if (char === game[2][2] && char === game[2][4]) {
    console.log(char + ' WINS!');
    gameOver = true;
  };

  // deal with bottom left row
  var char = game[4][0];
  if (char === game[4][2] && char === game[4][4]) {
    console.log(char + ' WINS!');
    gameOver = true;
  };
  if (char === game[2][2] && char === game[0][4]) {
    console.log(char + ' WINS!');
    gameOver = true;
  };

  // deal with top middle column
  var char = game[0][2];
  if (char === game[2][2] && char === game[4][2]) {
    console.log(char + ' WINS!');
    gameOver = true;
  };

  // deal with top right corner
  var char = game[0][4];
  if (char === game[2][4] && char === game[4][4]) {
    console.log(char + ' WINS!');
    gameOver = true;
  };
  if (char === game[2][2] && char === game[4][0]) {
    console.log(char + ' WINS!');
    gameOver = true;
  };

  // bottom right corner and all other places are dealt with by previous checks

}

// build out function to replace nubers with 'X's or 'O's
var placePiece = function(locationNumber, char) {
  var moveValid = true;

  switch(locationNumber) {
    case '1':
        game[0][0] = char;
        break;
    case '2':
        game[0][2] = char;
        break;
    case '3':
        game[0][4] = char;
        break;
    case '4':
        game[2][0] = char;
        break;
    case '5':
        game[2][2] = char;
        break;
    case '6':
        game[2][4] = char;
        break;
    case '7':
        game[4][0] = char;
        break;
    case '8':
        game[4][2] = char;
        break;
    case '9':
        game[4][4] = char;
        break;
    default:
        moveValid = false;
        console.log('Please select a number between 1 and 9')
  }

  if (moveValid === true) {
    console.log('Nice move! Current board is now: \n', game);
    checkWinner();
  }
}


var currPlayer = 'X';
console.log(game);

// https://www.npmjs.com/package/prompt
prompt.start();

var playTurn = function() {
  
  prompt.get(['location'], function (err, result) {
    placePiece(result.location, currPlayer);
    if (currPlayer === 'X') {
      currPlayer ='O';
    } else {
      currPlayer ='X';
    }

    if (gameOver !== true) {
      playTurn()
    }
  });

}

playTurn();
