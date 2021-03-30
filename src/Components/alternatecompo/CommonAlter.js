import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdMoreHoriz } from 'react-icons/md'
import GreenBtn from './buttons/GreenBtn'
import WhiteBtn from './buttons/WhiteBtn'

function CommonAlter() {
    return (
        <div className='common-alter'>
        <div className='history-alter flex flex-col'>
            <p>Save your favorites.</p>
            <p className='secondary-text flex flex-align-c'>Tap on <AiOutlineHeart color='black' className='alter-icon' size='1rem'/> or <MdMoreHoriz className='alter-icon'  color='black' size='1rem'/>button to build your music library.</p>
            <GreenBtn/>
            <WhiteBtn/>
        </div>
        </div>
    )
}

export default CommonAlter
