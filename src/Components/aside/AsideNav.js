import React from 'react';
import '../../assets/browseNav.css';
import { NavLink } from 'react-router-dom';


function AsideNav() {
    return (
        <ul className='browse-nav flex' id='aside-nav'>
            <li className='browse-nav-item'>
                <NavLink to='/my-music/playlists' className='browse-nav-link' activeClassName='browse-nav-active-link'>
                    Playlists
                    <div className='border'></div>
                </NavLink>
            </li>
            <li className='browse-nav-item'>
                <NavLink to='/my-music/songs-list' className='browse-nav-link' activeClassName='browse-nav-active-link'>
                    Songs
                    <div className='border'></div>
                </NavLink>
            </li>
            <li className='browse-nav-item'>
                <NavLink to='/my-music/albums' className='browse-nav-link' activeClassName='browse-nav-active-link'>
                    Albums
                    <div className='border'></div>
                </NavLink>
            </li>
            <li className='browse-nav-item'>
                <NavLink to='/my-music/artists' className='browse-nav-link' activeClassName='browse-nav-active-link'>
                    Artists
                    <div className='border'></div>
                </NavLink>
            </li>
            <li className='browse-nav-item'>
                <NavLink to='/listening-history' className='browse-nav-link' activeClassName='browse-nav-active-link'>
                    History
                    <div className='border'></div>
                </NavLink>
            </li>
        </ul>
    )
}

export default AsideNav
