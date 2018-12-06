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
import Carousel from './pages/ui/Carousels';
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register';
import Basic from './pages/table/basic';
import HighTable from './pages/table/highTable';
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
                                <Route path="/admin/ui/carousel" component={Carousel} />
                                <Route path="/admin/form/login" component={FormLogin} />
                                <Route path="/admin/form/register" component={FormRegister} />
                                <Route path="/admin/table/basic" component={Basic} />
                                <Route path="/admin/table/high" component={HighTable} />
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