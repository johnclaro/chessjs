import Bishop from '../pieces/Bishop';
import King from '../pieces/King';
import Queen from '../pieces/Queen';
import Knight from '../pieces/Knight';
import Pawn from '../pieces/Pawn';
import Rook from '../pieces/Rook';


export default function initBoard() {
    const squares = Array(120).fill(null);

    for (let index = 31; index < 39; index++) {
        squares[index] = new Pawn(2);
        squares[index + 50] = new Pawn(1);
    }

    squares[21] = new Rook(2);
    squares[28] = new Rook(2);
    squares[91] = new Rook(1);
    squares[98] = new Rook(1);

    squares[22] = new Knight(2);
    squares[27] = new Knight(2);
    squares[92] = new Knight(1);
    squares[97] = new Knight(1);

    squares[23] = new Bishop(2);
    squares[26] = new Bishop(2);
    squares[93] = new Bishop(1);
    squares[96] = new Bishop(1);

    squares[24] = new Queen(2);
    squares[25] = new King(2);

    squares[94] = new Queen(1);
    squares[95] = new King(1);

    return squares;
}
