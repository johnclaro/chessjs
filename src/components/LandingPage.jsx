import React from 'react';

import Layout from './Layout';
import King from '../pieces/King';


class LandingPage extends React.Component {

    render() {
        const king = new King();
        console.log(king.isMovePossible(2, 2));
        return (
            <Layout>
            </Layout>
        )
    }
}

export default LandingPage;