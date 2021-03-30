import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout';


class NotFound extends Component {

    render() {
        return (
            <Layout>
                {this.props.children}
            </Layout>
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