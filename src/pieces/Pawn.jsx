import Piece from './Piece';

import { WHITE_PAWN, BLACK_PAWN } from '../constants/pieces';


class Pawn extends Piece {

    constructor(player) {
        super(player, (player === 1 ? WHITE_PAWN : BLACK_PAWN))
        this.initialPositions = {
            1: [81, 82, 83, 84, 85, 86, 87, 88],
            2: [31, 32, 33, 34, 35, 36, 37, 38]
        }
    }

    isChessMove(source, destination, enemyPiece) {
        const white = this.player === 1;
        const black = this.player === 2;

        if (white) {
            const advanceOneSquare = (destination === source - 10 && !enemyPiece)
            const advanceTwoSquares =  (destination === source - 20 && this.initialPositions[1].indexOf(source) !== -1 && !enemyPiece)
            const leftCapture = destination === source - 11
            const rightCapture = destination === source - 9

            if (advanceOneSquare || advanceTwoSquares) {
                return true;
            } else if (enemyPiece && (leftCapture || rightCapture)) {
                return true;
            }
        } else if (black) {
            const advanceOneSquare = (destination === source + 10 && !enemyPiece);
            const advanceTwoSquares = (destination === source + 20 && this.initialPositions[2].indexOf(source) !== -1 && !enemyPiece)
            const leftCapture = destination === source + 11;
            const rightCapture = destination === source + 9;

            if (advanceOneSquare || advanceTwoSquares) {
                return true;
            } else if (enemyPiece && (leftCapture || rightCapture)) {
                return true;
            }
        } else {
            return false;
        }
    }

    getPiecesInTheWay(source, destination) {
        const whiteAdvanceTwoSquares = destination === source - 20;
        const blackAdvanceTwoSquares = destination === source + 20;
        if (whiteAdvanceTwoSquares) {
            return [source - 10];
        } else if (blackAdvanceTwoSquares) {
            return [source + 10];
        } else {
            return [];
        }
    }
}

export default Pawn;