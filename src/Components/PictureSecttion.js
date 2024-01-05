import React from 'react'
import essence from "../Assets/essence.png"
import badak from "../Assets/badak.png"
import kid from "../Assets/toy.png";
import quad from "../Assets/quad.png"
function PictureSecttion() {
    return (
        <>
            <div style={{ background: "lightgray", }}>


                <div className='d-flex justify-content-evenly pic ' style={{ maxWidth: "1400px", }}>
                    <div >
                        <img src={essence} style={{ objectFit: "contain" }} height="200px" width="200px" />
                    </div>
                    <div>
                        <img src={badak} style={{ objectFit: "contain" }} height="200px" width="200px" />
                    </div>
                    <div>
                        <img src={kid} style={{ objectFit: "contain" }} height="200px" width="200px" />
                    </div>
                    <div>
                        <img src={quad} style={{ objectFit: "contain" }} height="200px" width="200px" />
                    </div>
                </div> </div>
        </>
    )
}

export default PictureSecttion