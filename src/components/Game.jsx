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
            player: 1,
            target: -1,
            status: '',
            turn: 'white'
        }
    }

    handleClick(location) {
        const board = this.state.board.slice();
        const target = this.state.target;
        const piece = board[location];

        if (target === -1) {
            if (!piece || piece.player !== this.state.player) {
                this.setState({
                    status: `Wrong selection. Choose player ${this.state.player} pieces.`
                })
                // piece ? delete piece.style.backgroundColor : null;
            } else {
                piece.style = {...piece.style, backgroundColor: 'RGB(111,143,114)'}
                this.setState({
                    status: 'Choose destination for the selected piece',
                    target: location
                })
            }
        } else if (target > -1) {
            // board[target].style.backgroundColor;
            if (piece && piece.player === this.state.player) {
                this.setState({
                    status: 'Wrong selection. Choose valid source and destination again.',
                    target: -1
                })
            } else {
                const capturedWhites = this.state.capturedWhites.slice();
                const capturedBlacks = this.state.capturedBlacks.slice();
                const isTargetEnemy = piece ? true : false; 
                const isValidMove = board[target].isValidMove(target, location, isTargetEnemy);
                const move = board[target].chessMove(target, location);
                const isChessMove = this.isChessMove(move);
        
                if (isValidMove && isChessMove) {
                    if (piece !== null) {
                        if (piece.player === 1) {
                            capturedWhites.push(piece);
                        } else {
                            capturedBlacks.push(piece);
                        }
                    }
                    board[location] = board[target];
                    board[target] = null;
                    let player = this.state.player === 1 ? 2 : 1;
                    let turn = this.state.turn === 'white' ? 'black' : 'white';
                    this.setState({
                        target: -1,
                        board: board,
                        status: '',
                        capturedWhites,
                        capturedBlacks,
                        player,
                        turn
                    });
                } else {
                    this.setState({
                        status: 'Wrong location. Choose valid source and destination again.',
                        target: -1
                    })
                }
            }
        }
    }

    isChessMove(move) {
        let isLegal = true;
        for (let location = 0; location < move.length; location++) {
            if (this.state.board[move[location]] !== null) {
                isLegal = false;
            }
        }
        return isLegal;
    }
    
    render() {
        return (
            <div>
                <div className='game'>
                    <div className='game-board'>
                        <Board
                            board={this.state.board}
                            onClick={(location) => this.handleClick(location)}
                        />
                    </div>
                    <div className='game-info'>
                        <h3>Turn</h3>
                        <div id='player-turn-box' style={{backgroundColor: this.state.turn}}></div>
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
