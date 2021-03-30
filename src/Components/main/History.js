import React from 'react';
import HistoryAlter from '../alternatecompo/HistoryAlter'
import '../../assets/history.css';
function History() {
    return (
        <div className='showcase-container'>
            <div className='browse-container history'>
                <h1>History</h1>
                <ul className='browse-nav flex'>
                    <li className='browse-nav-item'>
                        Recently Played
                        <div className='border'></div>
                    </li>
                </ul>
                <HistoryAlter/>
            </div>
        </div>
    )
}

export default History
