import React from 'react';
import defaultSongImage from '../../images/default1.png';
import '../../assets/song.css';
import { MdPlayArrow, MdMoreHoriz } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'

function Song() {
    return ( 
        <div className='indivi-song'>
            <div className='img-holder'>
                <img src={defaultSongImage} alt='default' />
                <div className='song-overlay-wrapper'>
                    <div className='indivi-song-overlay  flex-col'>
                        <div className='overlay-play overlay-icon flex flex-align-c'>
                            <MdPlayArrow color='white'/>
                        </div>
                        <div className='overlay-heart'>
                            <AiOutlineHeart className='overlay-icon' />
                            <MdMoreHoriz className='overlay-icon' />
                        </div>
                    </div>
                </div>
            </div>
            <p>SongName</p>
        </div>
    )
}

export default Song
