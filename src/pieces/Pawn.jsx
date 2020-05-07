import Piece from './Piece';

import { WHITE_PAWN, BLACK_PAWN } from '../constants/pieces';


export default class Pawn extends Piece {

    constructor(player) {
        super(player, (player === 1 ? WHITE_PAWN : BLACK_PAWN))
        this.initialPositions = {
            1: [48, 49, 50, 51, 52, 53, 54, 55],
            2: [8, 9, 10, 11, 12, 13, 14, 15]
        }
    }

    isMovePossible(source, destination, isDestinationEnemyOccupied) {
        if(this.player === 1) {
            if ((destination === source - 8 && !isDestinationEnemyOccupied) || (destination === source - 16 && this.initialPositions[1].indexOf(source) !== -1)) {
                return true;
            } else if (isDestinationEnemyOccupied && (destination === source - 9 || destination === source - 7)) {
                return true;
            }
        } else if (this.player === 2) {
            if ((destination === source + 8 && !isDestinationEnemyOccupied) || (destination === source + 16 && this.initialPositions[2].indexOf(source) !== 1)) {
                return true;
            } else if (isDestinationEnemyOccupied && (destination === source + 9 || destination === source + 7)) {
                return true;
            }
        } else {
            return false;
        }
    }

    getSourceToDestinationath(source, destination) {
        if (destination === source - 16) {
            return [source - 8];
        } else if (destination === source + 16) {
            return [source + 8];
        } else {
            return [];
        }
    }
}