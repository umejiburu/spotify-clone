import React from 'react'
import world from './images/world.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

function Banner() {
  return (
    <div className='banner'>
      <div className='topSection'>
        <span className='trending'>
          <h4>What's hot</h4>
          <h2>Trending</h2>
        </span>
        <div>
          <p>More</p> <i><MdOutlineKeyboardArrowRight/></i></div>
      </div>
      <div className='bannerImage'>
        <img src={world} alt='Banner Image'/>
        <div className='bannerDetails'>
          <p>Artist</p>
          <h1>On Top</h1>
          <h1>Of The World</h1>

          <div className='buttons'>
            <button className='primary'>Play</button>
            <button className='secondary'>Follow</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export  {Banner}