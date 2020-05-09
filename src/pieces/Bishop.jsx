import Piece from './Piece';

import { WHITE_BISHOP, BLACK_BISHOP } from '../constants/pieces';


export default class Bishop extends Piece {
    constructor(player) {
        super(player, (player === 1 ? WHITE_BISHOP : BLACK_BISHOP ))
    }

    isChessMove(source, destination) {
        return (Math.abs(source - destination) % 9 === 0 || Math.abs(source - destination) % 7 === 0);
    }

    chessMove(source, destination) {
        let path = [], start, end, increment;

        if (source > destination) {
            start = destination;
            end = source;
        } else {
            start = source;
            end = destination;
        }

        if (Math.abs(source - destination) % 9 === 0) {
            increment = 9;
            start += 9;
        } else {
            increment = 7;
            start += 7;
        }

        for (let index = start; index < end; index+=increment) {
            path.push(index);
        }

        return path;
    }
}