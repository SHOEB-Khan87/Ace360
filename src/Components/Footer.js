import React from 'react'
import graph from "../Assets/graph.jpg"
function Footer() {
    return (
        <>
            <div className='container m-auto ' >
                <div className='row mb-5' >
                    <div class="col-6 " >
                        <p className='h3' >A digital web design studio creating <br />modern & engaging online</p>
                        <p className='mt-5' style={{ maxWidth: "500px" }}>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <ul className='mt-5 list'>
                            <li>
                                What is Lorem Ipsum? Lorem Ipsum is simply dummy text
                            </li>

                        </ul>
                        <ul className='mt-2 list' >
                            <li>
                                What is Lorem Ipsum? Lorem Ipsum is simply dummy text
                            </li>

                        </ul>
                        <ul className='mt-2 list'>
                            <li>
                                What is Lorem Ipsum? Lorem Ipsum is simply dummy text
                            </li>

                        </ul>
                        <button className='btn btn-success p-2 mt-5'>Learn More {`->`}</button>
                    </div>
                    <div class="col-6">
                        <img src={graph} style={{ objectFit: "contain" }} width="100%" />
                    </div>
                </div>
            </div>
        </>
    )
}
//  
//   
export default Footer