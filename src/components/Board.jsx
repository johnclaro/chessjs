import React from 'react';

import Square from './Square';


class Board extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            offboard: [
                0,1,2,3,4,5,6,7,8,9,
                10,11,12,13,14,15,16,17,18,19,
                100,101,102,103,104,105,106,107,108,109,
                110,111,112,113,114,115,116,117,118,119,
                20,30,40,50,60,70,80,90,
                29,39,49,59,69,79,89,99
            ]
        }
    }

    renderSquare(index, shade) {
        return <Square
            key={index}
            piece={this.props.board[index]}
            style={this.props.board[index] ? this.props.board[index].style : null}
            shade={shade}
            number={index}
            onClick={() => this.props.onClick(index)}
        />
    }

    render() {
        const ROWS = 12;
        const COLUMNS = 10;
        const board = [];
        for (let row = 0; row < ROWS; row++) {
            const rows = [];
            for (let column = 0; column < COLUMNS; column++) {
                const isEvenIndex = isEven(row) && isEven(column)
                const isOddIndex = !isEven(row) && !isEven(column)
                let shade = (isEvenIndex || (isOddIndex)) ? 'light-square' : 'dark-square';
                const index = (row * COLUMNS) + column;
                if (this.state.offboard.includes(index)) {
                    shade = 'offboard-square';
                }
                rows.push(this.renderSquare(index, shade))
            }
            board.push(<div key={row} className='board-row'>{rows}</div>)
        }
        return (
            <div>
                {board}
            </div>
        )
    }
}

function isEven(number) {
    return number % 2 === 0
}

export default Board;