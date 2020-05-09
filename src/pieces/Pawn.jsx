import Piece from './Piece';

import { WHITE_PAWN, BLACK_PAWN } from '../constants/pieces';


class Pawn extends Piece {

    constructor(player) {
        super(player, (player === 1 ? WHITE_PAWN : BLACK_PAWN))
        this.initialPositions = {
            1: [48, 49, 50, 51, 52, 53, 54, 55],
            2: [8, 9, 10, 11, 12, 13, 14, 15]
        }
    }

    isChessMove(source, destination, enemyPiece) {
        const white = this.player === 1;
        const black = this.player === 2;

        if (white) {
            const advanceOneSquare = (destination === source - 8 && !enemyPiece)
            const advanceTwoSquares =  (destination === source - 16 && this.initialPositions[1].indexOf(source) !== -1 && !enemyPiece)
            const leftCapture = destination === source - 9
            const rightCapture = destination === source - 7

            if (advanceOneSquare || advanceTwoSquares) {
                return true;
            } else if (enemyPiece && (leftCapture || rightCapture)) {
                return true;
            }
        } else if (black) {
            const advanceOneSquare = (destination === source + 8 && !enemyPiece);
            const advanceTwoSquares = (destination === source + 16 && this.initialPositions[2].indexOf(source) !== 1 && !enemyPiece)
            const leftCapture = destination === source + 9;
            const rightCapture = destination === source + 7;

            if (advanceOneSquare || advanceTwoSquares) {
                return true;
            } else if (enemyPiece && (leftCapture || rightCapture)) {
                return true;
            }
        } else {
            return false;
        }
    }

    chessMove(source, destination) {
        const whiteAdvanceTwoSquares = destination === source - 16;
        const blackAdvanceTwoSquares = destination === source + 16;
        if (whiteAdvanceTwoSquares) {
            return [source - 8];
        } else if (blackAdvanceTwoSquares) {
            return [source + 8];
        } else {
            return [];
        }
    }
}

export default Pawn;