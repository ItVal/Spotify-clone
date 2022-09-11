import React from 'react'
import "../assets/Style.css";

const Home = (props) => {
  return (
    <>
    <div className="home_title">
        Les meilleurs Albums du moment.
    </div>
    <div className="myalbum">
 {props.renderAlbums}
    </div>
    </>
  )
}

export default Home