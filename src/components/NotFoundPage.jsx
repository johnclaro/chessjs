import React from 'react';
import { Link } from 'react-router-dom';

import NotFound from '../containers/NotFound';


class NotFoundPage extends React.Component {

    render() {
        return (
            <NotFound>
                <h1 className='header--title'>Page not found!</h1> 
                <p>Sorry, but the page you were looking for could not be found.</p>
                <p>You can <Link to='/'>click here to return to our front page</Link>.</p>
            </NotFound>
        )
    }
}

export default NotFoundPage;