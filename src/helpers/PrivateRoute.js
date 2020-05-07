import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isLoading) {
                    return <div className='text-center mt-5'><i className='fas fa-sync-alt fa-spin'></i></div>
                } else if (!auth.isAuthenticated && !auth.isLogout) {
                    return <Redirect to={{ pathname: '/login', state: 'Unauthorized' }} />
                } else {
                    return <Component {...props} />
                }
            }}
        />
    )
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(
    mapStateToProps
)(PrivateRoute);
