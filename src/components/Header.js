import React from 'react';
import '../App.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppBar from '@mui/material/AppBar';
import NavBar from './NavBar';

function Header() {
    return (
        <div className="app__header row">

            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
                alt="IG"
                className="IGLogo"
            />

            <KeyboardArrowDownIcon />

            <div className="barPlaceHolder"> search</div>
            
           <NavBar />
                
        </div>
    )
};

export default Header;