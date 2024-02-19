import React, { useEffect } from "react";
import gsap  from "gsap";


function HeroSection() {

    useEffect(() =>{
        const tl = gsap.timeline();
        tl.from(".text",{
            y:200,
            ease:"power4.out",
            duration:1.8,
            delay:2,
            opacity:0
        })

    })


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
            <p className="text">Discover Clarity with Subvision</p>
            {/* <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <a className="link" onClick={handleSoundSection}>Learn more</a>
                </li>
            </ul> */}
        </div>
     );
}

export default HeroSection;