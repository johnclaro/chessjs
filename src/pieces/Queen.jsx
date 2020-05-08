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
        let path = [], pathStart, pathEnd, incrementBy;
        
        if (source > destination) {
            pathStart = destination;
            pathEnd = source;
        } else {
            pathStart = source;
            pathEnd = destination;
        }

        if (Math.abs(source - destination) % 8 === 0) {
            incrementBy = 8;
            pathStart += 8;
        } else if (Math.abs(source - destination) % 9 === 0) {
            incrementBy = 9;
            pathStart += 9;
        } else if (Math.abs(source - destination) % 7 === 0) {
            incrementBy = 7;
            pathStart += 7;
        } else {
            incrementBy = 1;
            pathStart += 1;
        }

        for (let index = pathStart; index < pathEnd; index+=incrementBy) {
            path.push(index)
        }

        return path;
    }
}