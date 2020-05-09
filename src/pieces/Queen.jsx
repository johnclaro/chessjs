import { WHITE_QUEEN, BLACK_QUEEN } from '../constants/pieces';

import Piece from './Piece';


export default class Queen extends Piece {
    constructor(player) {
        super(player, (player === 1 ? WHITE_QUEEN : BLACK_QUEEN ))
    }

    isChessMove(source, destination) {
        let modulo = source % 8;
        let difference = 8 - modulo

        return (Math.abs(source - destination) % 9 === 0 || Math.abs(source - destination) % 7 === 0) ||
            (Math.abs(source - destination) % 8 === 0 || (destination >= (source - modulo) && destination < (source + difference)))
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

        if (Math.abs(source - destination) % 8 === 0) {
            increment = 8;
            start += 8;
        } else if (Math.abs(source - destination) % 9 === 0) {
            increment = 9;
            start += 9;
        } else if (Math.abs(source - destination) % 7 === 0) {
            increment = 7;
            start += 7;
        } else {
            increment = 1;
            start += 1;
        }

        for (let index = start; index < end; index+=increment) {
            path.push(index)
        }

        return path;
    }
}