import React from 'react';

import Board from './Board';
import CapturedPiece from './CapturedPiece';
import initBoard from '../helpers/init';


class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            board: initBoard(),
            capturedWhites: [],
            capturedBlacks: [],
            source: -1,
            status: '',
            current: {
                player: 1,
                turn: 'white'
            }
        }
    }

    handleClick(destination) {
        const board = this.state.board.slice();
        const { source, current } = this.state;
        const piece = board[destination];
        const chosenSource = source === -1;
        const validSource = source > -1;

        if (chosenSource) {
            if (!piece || piece.player !== current.player) {
                this.setState({
                    status: `Wrong selection. Choose player ${current.player} pieces.`
                })
                if (piece) {
                    piece.style = {...piece.style, backgroundColor: ''};
                }
            } else {
                piece.style = {...piece.style, backgroundColor: '#DAC350'}
                this.setState({
                    status: 'Choose destination for the selected piece',
                    source: destination,
                })
            }
        } else if (validSource) {
            board[source].style = {...board[source].style, backgroundColor: ''};
            if (piece && piece.player === current.player) {
                this.setState({
                    status: 'Wrong selection. Choose valid source and destination again.',
                    source: -1
                })
            } else {
                const capturedWhites = this.state.capturedWhites.slice();
                const capturedBlacks = this.state.capturedBlacks.slice();
                const piecesInTheWay = board[source].getPiecesInTheWay(source, destination);
                const isDestinationTaken = piece ? true : false; 
                const isChessMove = board[source].isChessMove(source, destination, isDestinationTaken);
                const isValidMove = this.isValidMove(piecesInTheWay);
        
                if (isChessMove && isValidMove) {
                    if (piece !== null) {
                        if (piece.player === 1) {
                            capturedWhites.push(piece);
                        } else {
                            capturedBlacks.push(piece);
                        }
                    }
                    board[destination] = board[source];
                    board[source] = null;
                    let nextPlayer = current.player === 1 ? 2 : 1;
                    let nextTurn = current.turn === 'white' ? 'black' : 'white';
                    this.setState({
                        source: -1,
                        board: board,
                        status: '',
                        current: {
                            player: nextPlayer,
                            turn: nextTurn
                        },
                        capturedWhites,
                        capturedBlacks
                    });
                } else {
                    this.setState({
                        status: 'Wrong destination. Choose valid source and destination again.',
                        source: -1
                    })
                }
            }
        }
    }

    scanForEnemyCheckmates() {
        console.log('Scanning...'); 
    }

    isValidMove(piecesInTheWay) {
        const { board } = this.state;
        let isValid = true;
        for (let index = 0; index < piecesInTheWay.length; index++) {
            const pieceInTheWay = piecesInTheWay[index];
            const piece = board[pieceInTheWay];
            if (piece !== null) {
                isValid = false;
            }
        }
        return isValid;
    }
    
    render() {
        return (
            <div>
                <div className='game'>
                    <div className='game-board'>
                        <Board
                            board={this.state.board}
                            onClick={(destination) => this.handleClick(destination)}
                        />
                    </div>
                    <div className='game-info'>
                        <h3 className='mt-3'>{this.state.current.turn}'s turn</h3>
                        <div className='game-status'>{this.state.status}</div>
                        <div className='captured-piece-block'>
                            {
                                <CapturedPiece
                                    capturedWhites={this.state.capturedWhites}
                                    capturedBlacks={this.state.capturedBlacks}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;
