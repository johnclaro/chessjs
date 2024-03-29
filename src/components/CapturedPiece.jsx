import React from 'react';
import Square from './Square';


class CapturedPiece extends React.Component {

    renderSquare(square, index, shade) {
        return <Square
            key={index}
            piece={square}
            style={square.style}
        />
    }

    render() {
        return (
            <div>
                <div className='board-row'>
                    {this.props.capturedWhites.map((white, index) =>
                        this.renderSquare(white, index)
                    )}
                </div>
                <div className='board-row'>
                    {this.props.capturedBlacks.map((black, index) =>
                        this.renderSquare(black, index)
                    )}
                </div>
            </div>
        )
    }
}

export default CapturedPiece;