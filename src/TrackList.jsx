import React from 'react'
import {BsVolumeUpFill, BsMusicNoteList} from 'react-icons/bs'
import {FaDesktop} from 'react-icons/fa'
import disk from './images/disk.jpg'

function TrackList() {
  return (
    <div className='trackList'>
      <div className="top">
        <img src={disk} alt="" />
        <p className='trackName'>Sample Name <span className='trackSpan'>Artist</span></p>
      </div>
      
    <div className="bottom">
      <i><BsVolumeUpFill/></i>
      <input type="range"  />
      <i><BsMusicNoteList/></i>
      <i><FaDesktop/></i>
    </div>
    </div>
  )
}  

export  {TrackList} 