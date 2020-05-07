import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout';
import Sidebar from './Sidebar';


class NotFound extends Component {

    render() {
        return (
            <div>
                {!this.props.auth.isAuthenticated ? (
                    <Layout>
                        {this.props.children}
                    </Layout>
                ) : (
                    <Sidebar>
                        {this.props.children}
                    </Sidebar>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(
    mapStateToProps
)(NotFound);