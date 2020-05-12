import { WHITE_QUEEN, BLACK_QUEEN } from '../constants/pieces';

import Piece from './Piece';


export default class Queen extends Piece {
    constructor(player) {
        super(player, (player === 1 ? WHITE_QUEEN : BLACK_QUEEN ))
    }

    isChessMove(source, destination) {
        let modulo = source % 10;
        let difference = 10 - modulo

        return (Math.abs(source - destination) % 11 === 0 || Math.abs(source - destination) % 9 === 0) ||
            (Math.abs(source - destination) % 10 === 0 || (destination >= (source - modulo) && destination < (source + difference)))
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

        if (Math.abs(source - destination) % 10 === 0) {
            increment = 10;
            start += 10;
        } else if (Math.abs(source - destination) % 11 === 0) {
            increment = 11;
            start += 11;
        } else if (Math.abs(source - destination) % 9 === 0) {
            increment = 9;
            start += 9;
        } else {
            increment = 3;
            start += 3;
        }

        for (let index = start; index < end; index+=increment) {
            path.push(index)
        }

        return path;
    }
}