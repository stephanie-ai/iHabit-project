import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ isLoggedIn, logout }) => {
    return (
        <nav>
            { !isLoggedIn ?
                <>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
                </>
                : 
                <>
                <NavLink to='/habits'>Habits</NavLink>
                <NavLink to='/allHabits'>All habits</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <button onClick={logout}>Logout</button>
                </>
            }
        </nav>

    );
}

export default NavBar;