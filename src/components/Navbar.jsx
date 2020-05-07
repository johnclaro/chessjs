import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light mb-5' id='main-navbar'>
                    <div className='container'>
                        <Link to='/' className='mr-5' style={{fontSize: 30, fontWeight: 700, color: '#111'}}>
                            <img className='mb-1 mr-3' alt='logo.png' src='/logo.png' height='30' width='30'></img>
                            upkeepo
                        </Link>
                        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar-content' aria-controls='navbar-content' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        <div className='collapse navbar-collapse' id='navbar-content'>
                            <div className='navbar-nav ml-auto mt-lg-0 mt-2'>
                                <Link to='/demo' className='nav-item nav-link my-auto mr-3'>Demo</Link>
                                <Link to='/login' className='nav-item nav-link my-auto mr-3'>Sign In</Link>
                                <Link to='/register' className='nav-item nav-link'>
                                    <span className='btn btn--template btn--theme'>GET STARTED</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
        )
    }
}

export default Navbar;