import React from 'react';

import Square from './Square';


class Board extends React.Component {

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
                const shade = (isEven(row) && isEven(column)) || (!isEven(row) && !isEven(column)) ? 'light-square' : 'dark-square';
                const index = (row * COLUMNS) + column;
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