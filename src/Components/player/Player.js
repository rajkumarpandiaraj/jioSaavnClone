import React from 'react';
import { BiRepeat } from 'react-icons/bi'
import { MdSkipPrevious, MdSkipNext, MdPlayArrow, MdMoreHoriz } from 'react-icons/md';
import { RiShuffleLine } from 'react-icons/ri';
import  { GoUnmute } from 'react-icons/go';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import deft from '../../images/defaultSong.png';
import '../../assets/player.css';

function Player() {
    return (
        <div className='player'>
            <div className='song-details'>
                <img src={deft} alt='song'/>
                <div>
                    <h4>Song Name</h4>
                    <p className='secondary-text'>Song Artist Details</p>
                </div>
            </div>

            <div className='controls'>
                <BiRepeat className='control-icons'/>
                <MdSkipPrevious className='control-icons'/>
                <MdPlayArrow className='control-icons'/>
                <MdSkipNext className='control-icons'/>
                <RiShuffleLine className='control-icons'/>
            </div>
            <div className='song-more-info'>
                <p className='song-length'>0.00/3.50</p>
                <MdMoreHoriz className='control-icons'/>
                <GoUnmute className='control-icons'/>
                <BsArrowsAngleExpand className='control-icons'/>
            </div>
        </div>
    )
}

export default Player
