import React from 'react';
import NavLogo from '../../images/navlogo.png';
import { BsChevronDown } from 'react-icons/bs';
import { RiUser6Line } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai'
import '../../assets/nav.css';
import { NavLink } from 'react-router-dom';
function Nav() {
    return (
        <div className='nav flex'>
            <img src={NavLogo} alt='nav-logo'/>
            <ul className='nav-list flex flex-align-c'>
                <li className='nav-item'>
                    <NavLink to='/' exact className='nav-link' activeClassName='active-nav-link'>
                        <strong>Home</strong><div className='border'></div>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/new-release'  className='nav-link' activeClassName='active-nav-link'>
                        <strong>Browse</strong><div className='border'></div>
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/upgrade'  className='nav-link' activeClassName='active-nav-link'>
                        <strong>Upgrade</strong><div className='border'></div>
                    </NavLink>
                </li>
                <li className='nav-form'>
                    <div className='nav-search flex'>
                        <div className="input flex">
                            <AiOutlineSearch/> <span>Search</span>
                        </div>
                    </div>
                </li>
                <li className='nav-language flex flex-align-c'>
                    <span className='language flex-col'>
                        Music Language
                        <span className='language-title secondary-text'>Tamil</span>
                    </span>
                    <BsChevronDown className='chevron-down secondary-text'/>
                </li>
                <li className='nav-user'>
                    <RiUser6Line color='#a9a9a9'/>
                    <BsChevronDown className='chevron-down secondary-text'/>
                </li>
            </ul>
            
            
        </div>
    )
}

export default Nav
