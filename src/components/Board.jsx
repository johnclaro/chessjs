import React from 'react';

import Square from './Square';


class Board extends React.Component {

    renderSquare(index, shade) {
        return <Square
            key={index}
            piece={this.props.board[index]}
            style={this.props.board[index] ? this.props.board[index].style : null}
            shade={shade}
            onClick={() => this.props.onClick(index)}
        />
    }

    render() {
        const board = [];
        for (let row = 0; row < 8; row++) {
            const rows = [];
            for (let column = 0; column < 8; column++) {
                const shade = (isEven(row) && isEven(column)) || (!isEven(row) && !isEven(column)) ? 'light-square' : 'dark-square';
                rows.push(this.renderSquare((row * 8) + column, shade))
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