import React from 'react';


class Layout extends React.Component {

    render() {
        return (
            <div>
                <div className='container mb-3'>
                    <div className='text-center mb-5'>
                        <b>chess</b>
                        <span className='ml-3 mr-3'>by</span>
                        <a href='https://www.johnclaro.com'>johnclaro</a>
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout;