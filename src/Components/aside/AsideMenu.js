import React from 'react';
import { VscHistory } from 'react-icons/vsc';
import { CgMusicNote, CgMediaPodcast } from 'react-icons/cg';
import { BsMic } from "react-icons/bs";
import { RiAlbumLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import '../../assets/aside.css';

function AsideMenu() {
    return (
        <aside className='aside'>
            <ul className='aside-list'>
                <li className='aside-item aside-heading'>
                    <h5>Library</h5>
                </li>
                <li>
                    <NavLink to='/listening-history' className='aside-item'>
                        <VscHistory className='aside-icons'/>
                        History
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-music/songs-list' className='aside-item'>
                        <CgMusicNote  className='aside-icons'/>
                        Songs
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-music/albums' className='aside-item'>
                        <RiAlbumLine  className='aside-icons'/>
                        Albums
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-music' className='aside-item'>
                        <CgMediaPodcast  className='aside-icons'/>
                        Podcasts
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-music/artists'  className='aside-item'>
                        <BsMic  className='aside-icons'/>
                        Artist
                    </NavLink>
                </li>
                <li>
                    <button><span className='plus'>+</span><span>New Playlist</span></button>
                </li>
                <li className='aside-item aside-heading' >
                    <h5>my playlists</h5>
                </li>
                <li className='aside-item aside-playlist'>
                    Starred Songs
                </li>
                <li className='aside-item aside-playlist'>
                    Starred Songs
                </li>
                <li className='aside-item aside-playlist'>
                    Starred Songs
                </li>
                <li className='aside-item aside-playlist'>
                    Starred Songs
                </li>
            </ul> 
        </aside>
    )
}

export default AsideMenu
