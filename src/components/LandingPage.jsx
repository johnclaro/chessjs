import React from 'react';

import Layout from './Layout';
import Game from './Game';


class LandingPage extends React.Component {

    render() {
        return (
            <Layout>
                <Game />
            </Layout>
        )
    }
}

export default LandingPage;