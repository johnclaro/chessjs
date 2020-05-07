import Piece from './Piece';

import { WHITE_KING, BLACK_KING } from '../constants/pieces';


export default class King extends Piece {
    constructor(player) {
        super(player, (player === 1 ? WHITE_KING : BLACK_KING))
    }

    isMovePossible(source, destination) {
        return (source - 9 === destination ||
            source - 8 === destination ||
            source - 7 === destination ||
            source + 1 === destination ||
            source + 9 === destination ||
            source + 8 === destination ||
            source + 7 === destination ||
            source - 1 === destination    
        )
    }

    getSourceToDestinationPath(source, destination) {
        return []
    }
}