import React from 'react';
import logo from "../img/logo.png";
const Header = () => {
    return (
        <div className='bg-gray-800 z-100 fixed top-0 w-full left-0 h-14 border-b'>
            <div className='fixed left-5 top-4'>
                <img className='w-20' src={logo} alt='logo' />
            </div>
        </div>
    );
}

export default Header;
