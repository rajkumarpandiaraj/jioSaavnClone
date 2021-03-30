import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/browseNav.css';

function BrowserNav() {
    return (
        <div>
            <ul className='browse-nav flex'>
                <li className='browse-nav-item'>
                <NavLink to='/new-release' className='browse-nav-link' activeClassName='browse-nav-active-link'>
                    new release
                    <div className='border'></div>
                </NavLink>
                </li>
                <li className='browse-nav-item'>
                <NavLink to='/top-chat' className='browse-nav-link' activeClassName='browse-nav-active-link'>
                    Top Chart
                    <div className='border'></div>    
                </NavLink>
                </li>
                <li className='browse-nav-item'>
                <NavLink to='/playlist' className='browse-nav-link' activeClassName='browse-nav-active-link'>
                    Playlist
                    <div className='border'></div>
                </NavLink>
                </li>
                <li className='browse-nav-item'>
                <NavLink to='/podcast' className='browse-nav-link' activeClassName='browse-nav-active-link'>
                    Podcast
                    <div className='border'></div>    
                </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default BrowserNav
