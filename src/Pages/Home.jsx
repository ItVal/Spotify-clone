import React from 'react'
import "../assets/Style.css";

const Home = (props) => {
  return (
    <>
    <div className="home_title">
        Les meilleurs Sons du moment avec Lindada Musik.
    </div>
    <div className="myalbum">
 {props.renderSearch}
    </div>
    </>
  )
}

export default Home