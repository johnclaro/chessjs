import Bishop from '../pieces/Bishop';
import King from '../pieces/King';
import Queen from '../pieces/Queen';
import Knight from '../pieces/Knight';
import Pawn from '../pieces/Pawn';
import Rook from '../pieces/Rook';


export default function initBoard() {
    const squares = Array(120).fill(null);

    for (let index = 37; index < 45; index++) {
        squares[index] = new Pawn(2);
        squares[index + 60] = new Pawn(1);
    }

    squares[25] = new Rook(2);
    squares[32] = new Rook(2);
    squares[116] = new Rook(1);
    squares[109] = new Rook(1);

    squares[26] = new Knight(2);
    squares[31] = new Knight(2);
    squares[115] = new Knight(1);
    squares[110] = new Knight(1);

    squares[27] = new Bishop(2);
    squares[30] = new Bishop(2);
    squares[114] = new Bishop(1);
    squares[111] = new Bishop(1);

    squares[28] = new Queen(2);
    squares[29] = new King(2);

    squares[112] = new Queen(1);
    squares[113] = new King(1);

    return squares;
}
