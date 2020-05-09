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
        if (this.player === 1) {
            const advance_one_square = (destination === source - 8 && !isDestinationEnemyOccupied)
            const advance_two_squares =  (destination === source - 16 && this.initialPositions[1].indexOf(source) !== -1 && !isDestinationEnemyOccupied)
            const left_capture = destination === source - 9
            const right_capture = destination === source - 7

            if (advance_one_square || advance_two_squares) {
                return true;
            } else if (isDestinationEnemyOccupied && (left_capture || right_capture)) {
                return true;
            }
        } else if (this.player === 2) {
            const advance_one_square = (destination === source + 8 && !isDestinationEnemyOccupied);
            const advance_two_squares = (destination === source + 16 && this.initialPositions[2].indexOf(source) !== 1 && !isDestinationEnemyOccupied)
            const left_capture = destination === source + 9;
            const right_capture = destination === source + 7;

            if (advance_one_square || advance_two_squares) {
                return true;
            } else if (isDestinationEnemyOccupied && (left_capture || right_capture)) {
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