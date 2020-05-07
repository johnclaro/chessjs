import React, { Component } from 'react';

import { connect } from 'react-redux';
import { logout } from '../actions/auth';


class Logout extends Component {
    
    onClick = () => {
        console.log('Cliked!')
        this.props.logout();
    }

    render() {
        const { className, paddingLeft } = this.props;
        return (
            <a href='/' className={className} onClick={this.onClick} style={{ paddingLeft }}>Sign out</a>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(
    mapStateToProps,
    { logout }
)(Logout);