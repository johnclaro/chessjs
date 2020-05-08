import React from 'react';

import Board from './Board';
import CapturedPiece from './CapturedPiece';
import initBoard from '../helpers/init';


class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: initBoard(),
            capturedWhites: [],
            capturedBlacks: [],
            player: 1,
            sourceSelection: -1,
            status: '',
            turn: 'white'
        }
    }

    handleClick(index) {
        const squares = this.state.squares.slice();

        if (this.state.sourceSelection === -1) {
            if (!squares[index] || squares[index].player !== this.state.player) {
                this.setState({
                    status: `Wrong selection. Choose player ${this.state.player} pieces.`
                })
                // squares[index] ? delete squares[index].style.backgroundColor : null;
            } else {
                squares[index].style = {...squares[index].style, backgroundColor: 'RGB(111,143,114)'}
                this.setState({
                    status: 'Choose destination for the selected piece',
                    sourceSelection: index
                })
            }
        } else if (this.state.sourceSelection > -1) {
            // squares[this.state.sourceSelection].style.backgroundColor;
            if (squares[index] && squares[index].player === this.state.player) {
                this.setState({
                    status: 'Wrong selection. Choose valid source and destination again.',
                    sourceSelection: -1
                })
            } else {
                const squares = this.state.squares.slice();
                const capturedWhites = this.state.capturedWhites.slice();
                const capturedBlacks = this.state.capturedBlacks.slice();
                const isDestinationEnemyOccupied = squares[index] ? true : false; 
                const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, index, isDestinationEnemyOccupied);
                const sourceToDestinationPath = squares[this.state.sourceSelection].getSourceToDestinationPath(this.state.sourceSelection, index);
                const isMoveLegal = this.isMoveLegal(sourceToDestinationPath);
        
                if (isMovePossible && isMoveLegal) {
                    if (squares[index] !== null) {
                        if (squares[index].player === 1) {
                            capturedWhites.push(squares[index]);
                        } else {
                            capturedBlacks.push(squares[index]);
                        }
                    }
                    squares[index] = squares[this.state.sourceSelection];
                    squares[this.state.sourceSelection] = null;
                    let player = this.state.player === 1 ? 2 : 1;
                    let turn = this.state.turn === 'white'? 'black' : 'white';
                    this.setState({
                        sourceSelection: -1,
                        squares: squares,
                        capturedWhites: capturedWhites,
                        capturedBlacks: capturedBlacks,
                        player: player,
                        status: '',
                        turn: turn
                    });
                } else {
                    this.setState({
                        status: 'Wrong selection. Choose valid source and destination again.',
                        sourceSelection: -1
                    })
                }
            }
        }
    }

    isMoveLegal(sourceToDestinationPath) {
        let isLegal = true;
        for (let index = 0; index < sourceToDestinationPath.length; index++) {
            if (this.state.squares[sourceToDestinationPath[index]] !== null) {
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
                            squares={this.state.squares}
                            onClick={(index) => this.handleClick(index)}
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
