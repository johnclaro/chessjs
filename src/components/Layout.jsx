import React from 'react';


class Layout extends React.Component {

    render() {
        return (
            <div>
                <div className='container mb-3'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout;