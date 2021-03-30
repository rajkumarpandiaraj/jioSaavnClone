import React from 'react'
import BrowseLang from './BrowseLang'
import BrowserNav from './BrowserNav'

function Playlist() {
    return (
        <div className='showcase-container'>
            <BrowserNav/>
            <div className='browse-container'>
                <BrowseLang/>
            </div>
        </div>
    )
}

export default Playlist
