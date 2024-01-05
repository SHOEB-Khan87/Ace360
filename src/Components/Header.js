import React from 'react'
import logo from "../Assets/logo.png"
function Header() {
    return (
        <>



            <div className='nav' style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px", maxWidth: "1600px", }}>
                <div style={{ display: "flex", gap: "60px", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <div >
                            <img src={logo} height="15px" width="15px" />
                        </div>
                        <div>
                            <span style={{ letterSpacing: "7px", fontWeight: "bold" }}>HIRIC</span>
                        </div>

                    </div>

                    <div >
                        <ul >
                            <li style={{ color: "green" }}>
                                Home
                            </li>
                            <li>
                                Features
                            </li>
                            <li>
                                Services
                            </li>
                            <li>
                                About
                            </li>
                            <li>
                                Pricing
                            </li>
                            <li>
                                Blog
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>

                    </div>
                </div>
                <div>
                    <button className='btn btn-success button' style={{ borderRadius: "20px", }}>Try it Free</button>
                </div>
            </div>
        </>
    )
}

export default Header