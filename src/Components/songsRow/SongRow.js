import React,{useEffect, useState} from 'react'
import Song from './Song'
import Carousel from 'react-elastic-carousel';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import '../../assets/songRow.css';

// function SongRow() { 
//     const [itemToShow, setItemToShow] = useState(8) 
//     const Arrow = ({ type, onClick, isEdge }) => {
//         const pointer = type === "PREV" ? <BiChevronLeft size='2rem'/> : <BiChevronRight size='2rem' />
//         return (
//             <button onClick={onClick} disabled={isEdge} className='btn caro-btn'>
//                 {pointer}
//             </button>
//         )
//     }
//     useEffect(() => {
//         const updateItemToShow = () =>{
//             console.log('resized');
//                 const windowWidth = window.innerWidth;
//                 if(windowWidth < 400){
//                     setItemToShow(1)
//                 }
//                 if(windowWidth >= 400 && windowWidth < 600){
//                     setItemToShow(2);
//                 }else if(windowWidth >= 600 && windowWidth < 700){
//                     setItemToShow(3)
//                 }else if(windowWidth >= 700 && windowWidth < 800){
//                     setItemToShow(4);
//                 }else if(windowWidth >= 800 && windowWidth <= 960){
//                     setItemToShow(5);
//                 }else if(windowWidth > 960 && windowWidth < 1200){
//                     console.log('size btwn 960-1100', windowWidth);
//                     setItemToShow(6);
//                 }else if(windowWidth >= 1200 && windowWidth < 1380 ){
//                     setItemToShow(7);
//                 }else if( windowWidth >= 1380){
//                     setItemToShow(8);
//                 }
//         }
//         window.addEventListener('resize', updateItemToShow)
//         updateItemToShow();
//     },[])
//     return (
//         <div className='song-row'>
//             <Carousel className='ca' itemsToShow={itemToShow} renderArrow={Arrow} >
//                 <Song/>
//                 <Song/>
//                 <Song/>
//                 <Song/>
//                 <Song/>
//                 <Song/>
//                 <Song/>
//                 <Song/>
//                 <Song/>
//                 <Song/>
//                 <Song/>
//                 <Song/>
//                 <Song/>
//             </Carousel>
//         </div>
//     )
// }

const SongRow = () =>{
    let prevScroll = 1;

    const caroLeftHandler = () =>{
        const caroRight = document.querySelector('.caro-right');
        const caroLeft = document.querySelector('.caro-left');    
        const songsContainer = document.querySelector('.caro-songs-container')
        songsContainer.scrollLeft -= window.innerWidth / 2 > songsContainer.clientWidth - 500 ? window.innerWidth / 2 : window.innerWidth - 100        
        caroRight.style.visibility = 'visible';       
        if(prevScroll === songsContainer.scrollLeft){
            caroLeft.style.visibility = 'hidden';
            prevScroll = 1;
        }else{
            prevScroll = songsContainer.scrollLeft
        }
        console.log(songsContainer.scrollLeft, prevScroll);
    }
    const caroRightHandler = () =>{
        const caroRight = document.querySelector('.caro-right');
        const caroLeft = document.querySelector('.caro-left');    
        const songsContainer = document.querySelector('.caro-songs-container')
        caroLeft.style.visibility = 'visible';
        if(prevScroll === songsContainer.scrollLeft){
            caroRight.style.visibility = 'hidden';
            prevScroll = 1;
            console.log('end');
        }else{
            songsContainer.scrollLeft += window.innerWidth / 2 > songsContainer.clientWidth - 500 ? window.innerWidth / 2 : window.innerWidth - 100        
            prevScroll = songsContainer.scrollLeft
        }
        console.log(songsContainer.scrollLeft, prevScroll);
    }

    return (
        <div className='carousel-container'>
            <button className='caro-btn caro-left' onClick={caroLeftHandler}>
                <BiChevronLeft/>
            </button>
            <div className='caro-songs-container flex'>
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
                <Song/>
            </div>
            <button className='caro-btn caro-right' onClick={caroRightHandler}>
                <BiChevronRight/>
            </button>
        </div>
    )
}

export default SongRow
