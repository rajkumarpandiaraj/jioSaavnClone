import React from 'react'
import Song from '../songsRow/Song'
import BrowserNav from './BrowserNav';
import '../../assets/newrelease.css';
import BrowseLang from './BrowseLang';

function NewRelease() {
    return (
        <>
        <div  className='showcase-container'>
            <BrowserNav/>
            <div className='browse-container'>
                <BrowseLang/>
                <h4>New Release</h4>
                <div className='new-release'>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                    <Song/>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewRelease
