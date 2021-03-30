import React from 'react'
import SongRow from '../songsRow/SongRow';
import '../../assets/home.css';

function Home() {
    return (
        <div className='showcase-container container'>
            <div className='trending-container showcase-row'>
                <h4>Trending Now</h4>
                <SongRow/>
            </div>
            <div className='new-release-container showcase-row'>
                <h4>New Release</h4>
                <SongRow/>
            </div>
            <div className='melody-container showcase-row'>
                <h4>Melodies</h4>
                <SongRow/>
            </div>
            <div className='melody-container showcase-row'>
                <h4>Melodies</h4>
                <SongRow/>
            </div>
            <div className='melody-container showcase-row'>
                <h4>Melodies</h4>
                <SongRow/>
            </div>
            <div className='melody-container showcase-row'>
                <h4>Melodies</h4>
                <SongRow/>
            </div>
            <div className='melody-container showcase-row'>
                <h4>Melodies</h4>
                <SongRow/>
            </div>
            <div className='melody-container showcase-row'>
                <h4>Melodies</h4>
                <SongRow/>
            </div>
            <div className='melody-container showcase-row'>
                <h4>Melodies</h4>
                <SongRow/>
            </div>
            <div className='melody-container showcase-row'>
                <h4>Melodies</h4>
                <SongRow/>
            </div>
            <div className='melody-container showcase-row'>
                <h4>Melodies</h4>
                <SongRow/>
            </div>
            <div className='melody-container showcase-row'>
                <h4>Melodies</h4>
                <SongRow/>
            </div>
            
        </div>
    )
}

export default Home
