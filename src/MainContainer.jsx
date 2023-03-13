import React from 'react'
import { Banner } from './Banner' 
import Header from './Header'
import PlaylistComp from './PlaylistComp'

function MainContainer(trackData) {

  return (
    <div className='mainContainer'>
      <Header />
       <Banner/>
       <PlaylistComp trackData={trackData} />
    </div>
  )
}

export  {MainContainer}