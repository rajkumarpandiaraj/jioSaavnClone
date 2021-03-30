import React from 'react';
import GreenBtn from './buttons/GreenBtn';
import WhiteBtn from './buttons/WhiteBtn';

function HistoryAlter() {
    return (
        <div className='history-alter flex flex-col'>
            <p>It's pretty quiet in here.</p>
            <p className='secondary-text'>Go find some tunes!</p>
            <GreenBtn/>
            <WhiteBtn/>
        </div>
    )
}

export default HistoryAlter
