import React from 'react';
import slider9 from '../Images/Slider/slider11.jpeg';
import slider10 from '../Images/Slider/slider10.jpeg';
import slider11 from '../Images/Slider/slider13.jpeg';
import slider12 from '../Images/Slider/JackD.jpeg';
import videos from '../Images/Slider/tiny2.mp4';

export default function Slider() {
    return (
        <>
            {/* Internal CSS */}
            <style>{`
                .slider-media {
                    object-fit: cover;
                    width: 100%;
                    height: 100vh;
                }

                @media (max-width: 768px) {
                    .slider-media {
                        height: 60vh;
                    }
                }
            `}</style>

            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                {/* Indicators */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                </div>

                {/* Slides */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <video autoPlay muted loop className="d-block slider-media">
                            <source src={videos} type="video/mp4" />
                        </video>
                    </div>

                    <div className="carousel-item">
                        <img src={slider9} alt="Slide 1" className="d-block slider-media" />
                    </div>

                    <div className="carousel-item">
                        <img src={slider12} alt="Slide 2" className="d-block slider-media" />
                    </div>

                    <div className="carousel-item">
                        <img src={slider11} alt="Slide 3" className="d-block slider-media" />
                    </div>
                </div>

                {/* Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </>
    );
}
