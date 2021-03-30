import React from 'react'
import CommonAlter from '../../alternatecompo/CommonAlter'
import AsideNav from '../AsideNav'
import Number from './Number'

function Artists() {
    return (
        <div className='showcase-container'>
            <Number/>
            <AsideNav/>
            <CommonAlter/>
        </div>
    )
}

export default Artists
