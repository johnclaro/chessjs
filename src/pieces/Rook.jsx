import Piece from './Piece';

import { WHITE_ROOK, BLACK_ROOK } from '../constants/pieces';

export default class Rook extends Piece {

    constructor(player) {
        super(player, (player === 1 ? WHITE_ROOK : BLACK_ROOK ))
    }

    isMovePossible(source, destination) {
        let modulo = source % 8;
        let difference = 8 - modulo;
        return (Math.abs(source - desination) % 8 === 0 || (destination >= (source - modulo) && destination < (source + difference)));
    }

    getSourceToDestinationPath(source, destination) {
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
        } else {
            incrementBy = 1;
            pathStart += 1;
        }

        for (let index = pathStart; index < pathEnd; index += incrementBy) {
            path.push(index);
        }

        return path;
    }
}