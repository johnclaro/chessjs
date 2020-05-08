import Piece from './Piece';

import { WHITE_BISHOP, BLACK_BISHOP } from '../constants/pieces';


export default class Bishop extends Piece {
    constructor(player) {
        super(player, (player === 1 ? WHITE_BISHOP : BLACK_BISHOP ))
    }

    isMovePossible(source, destination) {
        return (Math.abs(source - destination) % 9 === 0 || Math.abs(source - destination) % 7 === 0);
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

        if (Math.abs(source - destination) % 9 === 0) {
            incrementBy = 9;
            pathStart += 9;
        } else {
            incrementBy = 7;
            pathStart += 7;
        }

        for (let index = pathStart; index < pathEnd; index+=incrementBy) {
            path.push(index);
        }

        return path;
    }
}