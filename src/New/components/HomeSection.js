import React from 'react'
import '../style/header.scss'

function HomeSection() {
  return (
    //here is the main container with background picture
    <div className="home-Header" id="home">
      {/* home content container */}
      <div className="home-content container" data-aos="fade-up" data-aos-duration="800">
        <div>
          {/* home header */}
          <h1>We are security service community.</h1>
          <p>keeping the good parts taking out the trash.</p>
          {/* home button */}
          <button>Go To Service</button>
        </div>
      </div>
    </div>
  )
}

export default HomeSection