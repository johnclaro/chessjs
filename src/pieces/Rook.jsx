import Piece from './Piece';

import { WHITE_ROOK, BLACK_ROOK } from '../constants/pieces';

export default class Rook extends Piece {

    constructor(player) {
        super(player, (player === 1 ? WHITE_ROOK : BLACK_ROOK ))
    }

    isChessMove(source, destination) {
        let modulo = source % 10;
        let difference = 10 - modulo;
        return (Math.abs(source - destination) % 10 === 0 || (destination >= (source - modulo) && destination < (source + difference)));
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

        if (Math.abs(source - destination) % 10 === 0) {
            incrementBy = 10;
            pathStart += 10;
        } else {
            incrementBy = 3;
            pathStart += 3;
        }

        for (let index = pathStart; index < pathEnd; index += incrementBy) {
            path.push(index);
        }

        return path;
    }
}