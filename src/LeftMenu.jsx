import React from 'react'
import {FaSpotify, FaEllipsisH} from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'
import { Menu } from './Menu'
import { MenuList } from './MenuList'
import { MenuPlaylist } from './MenuPlaylist'
import { TrackList } from './TrackList'


function LeftMenu({searchValue, setSearchValue}) {
  return (
    <div className='leftMenu'>
      <div className="logoContainer">
        <i><FaSpotify/></i>
        <h2>Spotify</h2>
        <i><FaEllipsisH/></i>
      </div>
      <div className='searchBox'>
        <input type="text" placeholder='Search..' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <i className='searchIcon'>
          < BiSearchAlt/>
          </i>
      </div>
      <Menu title='Menu' menuObject={MenuList}/>
      <MenuPlaylist/>
      <TrackList/>
    </div>
  )
}

export  {LeftMenu}   