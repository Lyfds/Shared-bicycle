import React from 'react';
import { HashRouter,Route,Switch } from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Login from './pages/login';
import Button from './pages/ui/Buttons';
import Modals from './pages/ui/Modals';
import NoMatch from './pages/nomatch';
import Loading from './pages/ui/Loadings';
import Notice from './pages/ui/Notice ';
export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={()=>
                       <Admin>
                           <Switch>
                                <Route path="/admin/ui/buttons" component={Button} />
                                <Route path="/admin/ui/modals" component={Modals} />
                                <Route path="/admin/ui/Loadings" comnotDeepStrictEqualponent={Loading} />
                                <Route path="/admin/ui/notification" component={Notice} />
                                <Route component={NoMatch} />
                           </Switch>            
                       </Admin>
                    }/>
                    <Route path="/order/detail" component={Login}/>
                </App>
            </HashRouter>
        )
    }
}