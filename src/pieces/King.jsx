import Piece from './Piece';

import { WHITE_KING, BLACK_KING } from '../constants/pieces';


export default class King extends Piece {
    constructor(player) {
        super(player, (player === 1 ? WHITE_KING : BLACK_KING))
    }

    isChessMove(source, destination) {
        return (
            source - 3 === destination ||
            source - 9 === destination ||  
            source - 10 === destination || 
            source - 11 === destination ||
            source + 3 === destination ||
            source + 9 === destination ||
            source + 10 === destination ||
            source + 11 === destination
        )
    }

    chessMove(source, destination) {
        return []
    }
}