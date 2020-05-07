import React from 'react';


class Layout extends React.Component {

    render() {
        return (
            <div>
                <div className='container mb-3'>
                    <div className='text-center mb-5'>
                        <span className='logo--text'>chess</span>
                        <span className='ml-3 mr-3'>by</span>
                        <a href='https://www.johnclaro.com' className='logo--text'>johnclaro</a>
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout;