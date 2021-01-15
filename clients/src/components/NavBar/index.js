import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'
import '../../styles/index.css'

const NavBar = ({ isLoggedIn, logout }) => {
    return (
        <nav className='navbar'>
            { !isLoggedIn ?
                <>
                {/* <NavLink exact to='/'>Home</NavLink>
                <NavLink exact to='/login'>Login</NavLink>
                <NavLink exact to='/register'>Register</NavLink> */}
                </>
                :
                <>
            <h2 id="ihabitTitle">iHabit</h2>
                <NavLink to='/habits' className='nav' activeClassName='current'>Habits</NavLink>
                <NavLink to='/statistics' className='nav' activeClassName='current'>Statistics</NavLink>
                <button id="logoutbtn" onClick={logout}>Logout</button>
                </>
            }
        </nav>
    );
}

export default NavBar;