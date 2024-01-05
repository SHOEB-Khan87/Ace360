import React from 'react'
import hero from "../Assets/hero.jpg"
import button from "../Assets/playB.png"
function HeroSection() {
    return (
        <>
            <div className='image'>
                <div style={{ height: "100%", width: "100%", opacity: "0.9", background: " #004DFF", background: "linear-gradient(135deg, #333790, #0567A3)" }}>
                    <div className='AWSOME' style={{ display: "flex", justifyContent: "center" }}>
                        <span style={{ color: "white", fontWeight: "bold", letterSpacing: "7px" }}>AWSOME DESIGN</span>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <span style={{ color: "white", fontWeight: "bold", fontSize: "35px", textAlign: "center" }}>We love make things amazing and <br /> simple</span>
                    </div>

                    <div className='lorem' style={{ display: "flex", justifyContent: "center" }}>
                        <span style={{ color: "white", textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    </div>
                    <div className='play' style={{ display: "flex", justifyContent: "center" }}>
                        <img src={button} style={{ objectFit: "contain", cursor: "pointer" }} height="60px" width="60px" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection