import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';

const Routes = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
        </BrowserRouter>
    );
}
export default Routes;