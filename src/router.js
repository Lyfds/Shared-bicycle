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
import Message from './pages/ui/Messages';
import Tab from './pages/ui/Tabs';
import Gallery from './pages/ui/Gallery';
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
                                <Route path="/admin/ui/loadings" component={Loading} />
                                <Route path="/admin/ui/notification" component={Notice} />
                                <Route path="/admin/ui/messages" component={Message} />
                                <Route path="/admin/ui/tabs" component={Tab} />
                                <Route path="/admin/ui/gallery" component={Gallery} />
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