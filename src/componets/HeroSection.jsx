import React from "react";
import IPhone from "../assets/images/iphone-14.jpg"
import holdingIPhone from "../assets/images/iphone-hand.png"

function HeroSection() {

    const handleSoundSection = () => {
        const elemnt = document.querySelector(".sound-section");
        window.scrollTo({
            top: elemnt?.getBoundingClientRect().top,
            left:0,
            behavior:"smooth"
        })
    }

    return ( 
        <div className="jumbotron-section wrapper">
            {/* <h2 className="title">New</h2>
            <img className="logo" src={IPhone} alt="iphone 14 pro" />
            <p className="text">Big and Bigger</p>
            <span className="description">
                From $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <a className="link" onClick={handleSoundSection}>Learn more</a>
                </li>
            </ul> */}
            {/* <img className="iphone-img" src={holdingIPhone} alt="iphone" /> */}
        </div>
     );
}

export default HeroSection;