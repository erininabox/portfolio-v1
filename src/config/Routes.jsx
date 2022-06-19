import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';
import Resume from '../pages/Resume/Resume';
import SignIn from '../pages/SignIn/SignIn';

function Routes() {
    return (
        <Routes>
            <Route exact path='/' element={Home} />
            <Route exact path='/portfolio' element={Portfolio} />
            <Route exact path='/contact' element={Contact} />
            <Route exact path='/resume' element={Resume} />
            <Route exact path='/signin' element={SignIn} />
        </Routes>
    )
}

export default Routes;