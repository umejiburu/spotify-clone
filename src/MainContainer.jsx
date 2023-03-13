import React from 'react'
import { Banner } from './Banner' 
import Header from './Header'
import PlaylistComp from './PlaylistComp'

function MainContainer() {
  return (
    <div className='mainContainer'>
      <Header />
       <Banner/>
       <PlaylistComp />
    </div>
  )
}

export  {MainContainer}