import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Resume from '../components/Resume';

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/resume' component={Resume} />
        </Switch>
    )
}

export default Routes;