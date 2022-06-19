import { Routes, Route } from 'react-router-dom';
import firebase from './firebase';
import { useState, useEffect } from 'react';
import PortfolioInput from '../pages/EditContent/PortfolioInput';
import AwardsInput from '../pages/EditContent/AwardsInput';
import ExperienceInput from '../pages/EditContent/ExperienceInput';
import SkillsInput from '../pages/EditContent/SkillsInput';
import SignIn from '../pages/SignIn/SignIn';

function RoutesAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        setUser(user);
      })
    }, [])
    
    return (
        <Routes>
            <Route path='/update-portfolio' element={
                user ? {PortfolioInput} : {SignIn}
            } />
            <Route path='/update-award' element={
                user ? {AwardsInput} : {SignIn}
            } />
            <Route path='/update-experience' element={
                user ? {ExperienceInput} : {SignIn}
            } />
            <Route path='/update-skills' element={
                user ? {SkillsInput} : {SignIn}
            } />
        </Routes>
    )
}

export default RoutesAuth;