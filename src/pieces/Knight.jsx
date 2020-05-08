import Piece from './Piece';

import { BLACK_KNIGHT, WHITE_KNIGHT } from '../constants/pieces';


export default class Knight extends Piece {

    constructor(player) {
        super(player, (player === 1 ? WHITE_KNIGHT : BLACK_KNIGHT ));
    }

    isChessMove(source, destination) {
        return (source - 17 === destination ||
            source - 10 === destination ||
            source + 6 === destination ||
            source + 15 === destination ||
            source - 15 === destination ||
            source - 6 === destination ||
            source + 10 === destination ||
            source + 17 === destination           
        )
    }

    chessMove() {
        return [];
    }
}