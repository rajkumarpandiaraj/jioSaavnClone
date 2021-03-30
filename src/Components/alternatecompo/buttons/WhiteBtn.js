import React from 'react';
import { Link } from 'react-router-dom';

function WhiteBtn() {
    return (
        <>
            <Link to='/new-release'>
                <button className='alt-btn btn-secondary secondary-text'>Browse New Releases</button>
            </Link>
        </>
    )
}

export default WhiteBtn
