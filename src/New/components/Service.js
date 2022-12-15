import React from 'react'
import "../style/service.scss";
import { GoHome } from "react-icons/go"

function Service() {
    return (
        // here is service complete secion
        <div className="service" id='service'>
            {/* service header here */}
            <div className="service-header">
                <div>
                    <p className='paragraphHeader'>What We Offer</p>
                    <h2>Our Awesome Services</h2>
                    <span>
                        <hr />
                    </span>
                    <p className="paragraphFooter">Aliquam litora ad sociosqu turpis etiam tempus egestas nulla diam tempus mollis ante ornare consectetuer dictum sodales adipiscing ultricies Elit semper Integer felis lectus.</p>
                </div>
            </div>

            {/* service cards is here */}

            <div className="service-cards container-fluid">

                {/* all cards in there section */}
                <div className="cards">

                    {/* this is a card */}
                    <div className="card">
                        <div className="card-content">

                            {/* this is icon section */}
                            <div className="card-icon">
                                <GoHome className='icon' />
                            </div>

                            {/* this  is card data section */}
                            <div className="card-data">
                                <h3>Home Security</h3>
                                <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                    {/* this is a card */}
                    <div className="card">
                        <div className="card-content">

                            {/* this is icon section */}
                            <div className="card-icon">
                                <GoHome className='icon' />
                            </div>

                            {/* this  is card data section */}
                            <div className="card-data">
                                <h3>Home Security</h3>
                                <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                    {/* this is a card */}
                    <div className="card">
                        <div className="card-content">

                            {/* this is icon section */}
                            <div className="card-icon">
                                <GoHome className='icon' />
                            </div>

                            {/* this  is card data section */}
                            <div className="card-data">
                                <h3>Home Security</h3>
                                <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* this is second row of cards  */}
                <div className="cards">

                    {/* this is a card */}
                    <div className="card">
                        <div className="card-content">

                            {/* this is icon section */}
                            <div className="card-icon">
                                <GoHome className='icon' />
                            </div>

                            {/* this  is card data section */}
                            <div className="card-data">
                                <h3>Home Security</h3>
                                <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>

                    {/* this is a card */}
                    <div className="card">
                        <div className="card-content">

                            {/* this is icon section */}
                            <div className="card-icon">
                                <GoHome className='icon' />
                            </div>

                            {/* this  is card data section */}
                            <div className="card-data">
                                <h3>Home Security</h3>
                                <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>

                    {/* this is a card */}
                    <div className="card">
                        <div className="card-content">

                            {/* this is icon section */}
                            <div className="card-icon">
                                <GoHome className='icon' />
                            </div>

                            {/* this  is card data section */}
                            <div className="card-data">
                                <h3>Home Security</h3>
                                <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Service