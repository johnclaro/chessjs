import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logout from './Logout';


class Sidebar extends React.Component {

    state = {
        links: [
            {
                'url': '/monitors',
                'logo': 'fas fa-desktop',
                'title': 'Monitors',
                'paddingRight': 16
            },
            {
                'url': '/incidents',
                'logo': 'fas fa-exclamation-circle',
                'title': 'Incidents',
                'paddingRight': 18
            },
            {
                'url': '/components',
                'logo': 'fas fa-cube',
                'title': 'Components',
                'paddingRight': 16
            },
        ]
    }

    render() {
        const { links } = this.state;
        const pathname = window.location.pathname;
        return (
            <div className='d-flex' id='sidebar-container'>
                <nav id='sidebar' className='mt-3'>
                    <div className='list-group list-group-flush'>
                        { links.map((link, index) => 
                            <div key={`sidebar-${index}`}>
                                <Link to={link.url} className={`list-group-item list-group-item--theme list-group-item-action ${pathname === link.url ? 'sidebar--item-active' : null}`}><i className={`${link.logo}`} style={{paddingRight: link.paddingRight}}></i> {link.title}</Link>
                            </div>
                        )}
                    </div>
                </nav>
                <div id='sidebar-content'>
                    <nav className='navbar navbar-expand-lg navbar-light mt-3 mb-3' id='navbar'>
                        <Link to='/demo' className='nav-item'> <i className='fas fa-globe mr-3'></i> <span>status.upkeepo.com</span></Link>
                        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar-content' aria-controls='navbar-content' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbar-content'>
                            <div className='navbar-nav ml-auto mt-2'>
                                { links.map((link, index) => 
                                    <div key={`navbar-${index}`}>
                                        <Link to={link.url} className={`nav-item nav-link ${pathname === link.url ? 'navbar--item-active' : null}`}>
                                            <i className={`${link.logo}`} style={{paddingRight: link.paddingRight}}></i> {link.title}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </nav>
                    <nav className='navbar navbar-expand-lg navbar-light mb-3' id='sidebar-navbar' style={{paddingTop: 11}}>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item nav-link dropdown my-auto dropdown-icon mr-3'>
                                <i className='fas fa-bell sidebar--item-icon' data-toggle='dropdown'></i>
                                <div className='dropdown-menu dropdown-menu-right'>
                                    <Link to='/resend' className='dropdown-item'><i className='fas fa-envelope mr-3'></i> Resend verification email</Link>
                                    <span className='dropdown-header'><small>Please verify your email before activating your account</small></span>
                                    <div className='dropdown-divider'></div>
                                    <Link to='/activate' className='dropdown-item'><i className='fas fa-power-off mr-3'></i> Activate your page</Link>
                                    <span className='dropdown-header'><small>Your page is only accessible within your team members</small></span>
                                    <div className='dropdown-divider'></div>
                                    <Link to='/services/create' className='dropdown-item'><i className='fas fa-cube mr-3'></i> Add your first component</Link>
                                    <span className='dropdown-header'><small>Something about what a component is all about</small></span>
                                    <div className='dropdown-divider'></div>
                                    <Link to='/services/create' className='dropdown-item'><i className='fas fa-exclamation-circle mr-3'></i> Create your first incident</Link>
                                    <span className='dropdown-header'><small>Something about what an incident is all about</small></span>
                                </div>
                            </li>
                            <li className='nav-item nav-link dropdown my-auto dropdown-icon mr-3'>
                                <i className='fas fa-question-circle sidebar--item-icon' data-toggle='dropdown'></i>
                                <div className='dropdown-menu dropdown-menu-right'>
                                    <a href='/slack' className='dropdown-item'><i className='fab fa-slack mr-3'></i> Join our Slack</a>
                                    <a href='mailto:john@upkeepo.com' className='dropdown-item'><i className='fas fa-paper-plane' style={{paddingRight: 14}}></i> Contact support</a>
                                </div>
                            </li>
                            <li className='nav-item nav-link dropdown my-auto dropdown-icon'>
                                <i className='fas fa-user-circle sidebar--item-icon' data-toggle='dropdown'></i>
                                <div className='dropdown-menu dropdown-menu-right'>
                                    <div className='dropdown-header'>john@upkeepo.com</div>
                                    <div className='dropdown-header'>Administrator</div>
                                    <div className='dropdown-divider'></div>
                                    <Link to='/profile' className='dropdown-item'>Profile</Link>
                                    <Logout className='dropdown-item' paddingLeft={24} />
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className='container'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {};
}

export default connect(
    mapStateToProps
)(Sidebar);