import Piece from './Piece';

import { BLACK_KNIGHT, WHITE_KNIGHT } from '../constants/pieces';


export default class Knight extends Piece {

    constructor(player) {
        super(player, (player === 1 ? WHITE_KNIGHT : BLACK_KNIGHT ));
    }

    isChessMove(source, destination) {
        const move = (
            source - 8 === destination ||
            source - 12 === destination ||
            source - 19 === destination ||
            source - 21 === destination ||
            source + 8 === destination ||
            source + 12 === destination ||
            source + 19 === destination ||
            source + 21 === destination           
        )
        return move 
    }

    getPiecesInTheWay() {
        return [];
    }
}