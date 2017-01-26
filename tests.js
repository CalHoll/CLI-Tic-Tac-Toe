var chai = require('chai');
var expect = chai.expect;
var ticTacToe = require('./game');

describe('ticTacToe', function() {
  it('placePiece() should place pieces onto a game board', function() {
    ticTacToe.placePiece('1', 'X');
    expect(ticTacToe.game[0][0]).to.equal('X');
  });

});
