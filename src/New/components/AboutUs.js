import React from 'react'
import "../style/aboutus.scss";
import one from "../images/image1.png"
import two from "../images/image2.png"
import three from "../images/image3.png"
import four from "../images/image4.png"
import { GoHome } from "react-icons/go"

function AboutUs() {
    return (
        // here is about section
        <div className="about container-fluid" id='about'>
            <div>
                {/* about gallery  */}
                <div className="about-gallery ">
                    <div className="box-center" ><h3>Since <br /> 2012</h3></div>
                    {/* about images */}
                    <div className="images">
                        <img src={one} alt="" />
                        <img src={three} alt="" />
                    </div>
                    {/* about images */}
                    <div className="images">
                        <img src={two} alt="" />
                        <img src={four} alt="" />
                    </div>

                </div>

                {/* about content */}
                <div className="about-content">
                    <div>

                        <p>About Us</p>
                        <h1>WE ARE TRUSTED BY MORE THAN 6,800 CLIENTS.</h1>
                        {/* about card */}
                        <div className="card">
                            <div className="card-content">

                                {/* about card icon */}
                                <div className="card-icon">
                                    <GoHome className='icon' />
                                </div>
                                {/* about card data */}

                                <div className="card-data">
                                    <h3>PLEASANT CONSULTING</h3>
                                    <p>Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum.</p>

                                </div>
                            </div>
                        </div>
                        {/* about card */}

                        <div className="card">
                            <div className="card-content">
                                {/* about card icon */}

                                <div className="card-icon">
                                    <GoHome className='icon' />
                                </div>
                                {/* about card data */}

                                <div className="card-data">
                                    <h3>PLEASANT CONSULTING</h3>
                                    <p>Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum.</p>

                                </div>
                            </div>
                        </div>

                        {/* about button */}
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutUs