import React from 'react'
import Mainsongs from '../Pages/Mainsongs'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Spotify = () => {
  return (
        <div>
      <div className="spotify__body">
        <Sidebar />
        <div className="body">
          <Navbar  />
          <div className="body__contents">
            <Mainsongs />
          </div>
        </div>
      </div>
      <div className="spotify__footer">
        <Footer />
      </div>
    </div>
  )
}

export default Spotify