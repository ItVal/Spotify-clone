import React from 'react'
import "../assets/Style.css";
import "../App.css";

const Home = (props) => {
  return (
    <>
    <div className="home_title" id='home_title'>
        Les meilleurs Sons du moment avec Valify Musik.
    </div>
    <div className="myalbum" id="myalbum">
 {props.renderSearch}
    </div>
    </>
  )
}

export default Home