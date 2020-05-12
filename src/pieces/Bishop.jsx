import Piece from './Piece';

import { WHITE_BISHOP, BLACK_BISHOP } from '../constants/pieces';


export default class Bishop extends Piece {
    constructor(player) {
        super(player, (player === 1 ? WHITE_BISHOP : BLACK_BISHOP ))
    }

    isChessMove(source, destination) {
        return (Math.abs(source - destination) % 11 === 0 || Math.abs(source - destination) % 9 === 0);
    }

    getPiecesInTheWay(source, destination) {
        let path = [], start, end, increment;

        if (source > destination) {
            start = destination;
            end = source;
        } else {
            start = source;
            end = destination;
        }

        if (Math.abs(source - destination) % 11 === 0) {
            increment = 11;
            start += 11;
        } else {
            increment = 9;
            start += 9;
        }

        for (let index = start; index < end; index+=increment) {
            path.push(index);
        }

        return path;
    }
}