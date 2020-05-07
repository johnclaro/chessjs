import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { loadUser } from './actions/auth';
import LandingPage from './components/LandingPage';
import NotFoundPage from './components/NotFoundPage';


class App extends React.Component {

    componentDidMount() {
        if (localStorage.getItem('token')) {
            store.dispatch(loadUser());
        }
    }

    render() {
        return(
            <Provider store={store}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={LandingPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
