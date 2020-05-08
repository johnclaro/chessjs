import React from 'react';

import Square from './Square';


class Board extends React.Component {

    renderSquare(index, shade) {
        console.log(this.props.squares[index])
        return <Square
            key={index}
            piece={this.props.squares[index]}
            style={this.props.squares[index] ? this.props.squares[index].style : null}
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