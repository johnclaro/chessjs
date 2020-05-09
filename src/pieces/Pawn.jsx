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

    isChessMove(source, destination, isDestinationEnemyOccupied) {
        const white = this.player === 1;
        const black = this.player === 2;

        if (white) {
            const advanceOneSquare = (destination === source - 8 && !isDestinationEnemyOccupied)
            const advanceTwoSquares =  (destination === source - 16 && this.initialPositions[1].indexOf(source) !== -1 && !isDestinationEnemyOccupied)
            const leftCapture = destination === source - 9
            const rightCapture = destination === source - 7

            if (advanceOneSquare || advanceTwoSquares) {
                return true;
            } else if (isDestinationEnemyOccupied && (leftCapture || rightCapture)) {
                return true;
            }
        } else if (black) {
            const advanceOneSquare = (destination === source + 8 && !isDestinationEnemyOccupied);
            const advanceTwoSquares = (destination === source + 16 && this.initialPositions[2].indexOf(source) !== 1 && !isDestinationEnemyOccupied)
            const leftCapture = destination === source + 9;
            const rightCapture = destination === source + 7;

            if (advanceOneSquare || advanceTwoSquares) {
                return true;
            } else if (isDestinationEnemyOccupied && (leftCapture || rightCapture)) {
                return true;
            }
        } else {
            return false;
        }
    }

    chessMove(source, destination) {
        const white_advanced_twice = destination === source - 16;
        const black_advanced_twice = destination === source + 16;
        if (white_advanced_twice) {
            return [source - 8];
        } else if (black_advanced_twice) {
            return [source + 8];
        } else {
            return [];
        }
    }
}

export default Pawn;