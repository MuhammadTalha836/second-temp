import React from 'react'
import "../style/gallery.scss";
import one from "../images/gallery-img1.png"
import two from "../images/gallery-img2.png"
import three from "../images/gallery-img3.png"
import four from "../images/gallery-img4.png"
import five from "../images/gallery-img5.png"
import six from "../images/gallery-img6.png"

function Gallery() {
    return (
        // here is gallery section
        <div className="gallery" id='gallery'>
            {/* gallery header here */}
            <div className="gallery-header">
                <div>
                    <p className='paragraphHeader'>See Our Experience</p>
                    <h2>Photo Gallery</h2>
                    <span>
                        <hr />
                    </span>
                    <p className="paragraphFooter">Aliquam litora ad sociosqu turpis etiam tempus egestas nulla diam tempus mollis ante ornare consectetuer dictum sodales adipiscing ultricies Elit semper Integer felis lectus.</p>
                </div>
            </div>
            {/* gallery images */}
            <div className="gallery-image">
                {/* gallery img row one */}
                <div className="images">
                    <img src={one} alt="" />
                    <img src={two} alt="" />
                    <img src={three} alt="" />
                </div>
                {/* gallery image row two */}
                <div className="images">
                    <img src={four} alt="" />
                    <img src={five} alt="" />
                    <img src={six} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gallery