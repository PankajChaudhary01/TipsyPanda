import React from 'react'
// import slider1 from '../Images/Slider/slider.jpg'
// import slider2 from '../Images/Slider/slider1.jpg'
// import slider3 from '../Images/Slider/slider2.jpg'
// import slider4 from '../Images/Slider/slider3.jpg'
// import slider5 from '../Images/Slider/pexels.jpeg'
// import slider6 from '../Images/Slider/Slider4.jpg'
// import slider7 from '../Images/Slider/Slider5.jpg'
// import slider8 from '../Images/Slider/Slider6.webp'
import slider9 from '../Images/Slider/slider11.jpeg'
import slider10 from '../Images/Slider/slider10.jpeg'
import slider11 from '../Images/Slider/slider13.jpeg'
import slider12 from '../Images/Slider/JackD.jpeg'
import videos from '../Images/Slider/tiny2.mp4'



export default function Slider() {
    return (

        <div id="demo" class="carousel slide " data-bs-ride="carousel">

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            </div>


            <div class="carousel-inner">
                <div class="carousel-item active">
                    {/* <img src={slider10} alt="Los Angeles" class="d-block w-100" height="788px" /> */}
                    <video autoPlay muted loop height="800px"   width="100%" style={{objectFit:"cover"}}>
                        <source src={videos} type="video/mp4" />
                    </video>
                </div>
                <div class="carousel-item">
                    <img src={slider9} alt="Chicago" class="d-block w-100" height="788px" />
                </div>
                <div class="carousel-item">
                    <img src={slider12} alt="New York" class="d-block w-100" height="788px" />
                </div>
                <div class="carousel-item">
                    <img src={slider11} alt="New York" class="d-block w-100" height="788px" />
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    )
}
