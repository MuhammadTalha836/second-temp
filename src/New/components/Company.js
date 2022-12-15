import React from 'react'
import "../style/company.scss";
import one from "../images/gallery-img1.png"
import two from "../images/company-img2.png"
import three from "../images/gallery-img4.png"

function Company() {
    return (
        // here is company section
        <div className="company" id='company'>
            {/* company header here */}
            <div className="company-header">
                <div>
                    <p className='paragraphHeader'>Our Recent Post</p>
                    <h2>About Our Company Activities</h2>
                    <span>
                        <hr />
                    </span>
                </div>
            </div>

            {/* company cards is here */}
            <div className="company-cards">

                {/* company all images */}
                <div className="images">
                    <div className="image">
                        <img src={one} alt="" />
                        <h4>Discover a better way of redefining</h4>
                        <p>A wonderful serenity has taken possession of my entire soul, like sweet mornings of spring which I enjoy with…</p>
                        <span>ADMIN</span> | <span>JANUARY 28, 2022</span> | <span>0 COMMENTS</span>
                    </div>
                    <div className="image">
                        <img src={two} alt="" />
                        <h4>Discover a better way of redefining</h4>
                        <p>A wonderful serenity has taken possession of my entire soul, like sweet mornings of spring which I enjoy with…</p>
                        <span>ADMIN</span> | <span>JANUARY 28, 2022</span> | <span>0 COMMENTS</span>
                    </div>
                    <div className="image">
                        <img src={three} alt="" />
                        <h4>Discover a better way of redefining</h4>
                        <p>A wonderful serenity has taken possession of my entire soul, like sweet mornings of spring which I enjoy with…</p>
                        <span>ADMIN</span> | <span>JANUARY 28, 2022</span> | <span>0 COMMENTS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company