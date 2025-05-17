import React from 'react'
import team from '../Images/Slider/slider14.jpeg'
import Panda from '../Images/Slider/panda-germany-40.jpg'
import Panda1 from '../Images/Slider/panda-the-corona-beer.jpg'
import Team from './Team'
import ChatBot from './ChatBot'
import Ai from './Ai'

export default function Aboutus() {

    return (
        <div className="div mt-5">
            <section class="py-5 bg-light text-center">
                <div class="container">
                    <h2 class="mb-4">Our story</h2>
                    <p class="mb-5 mx-auto lead" >
                        Welcome to <strong>The Tipsy Panda</strong>, your premier online destination for exquisite alcoholic beverages.
                        At The Tipsy Panda, we believe that every sip of alcohol should be an experience to cherish. Our mission is
                        to provide our customers with a diverse selection of high-quality drinks from around the world.
                    </p>
                    <div class="mb-4">
                        <img src={Panda} class="img-fluid rounded" alt="Team working" height="800px" width="800px" />
                    </div>
                    <div class="d-flex justify-content-center gap-3">
                        <a href="#" class="btn btn-dark">Join our team</a>
                        <a href="#" class="btn btn-outline-dark">Learn more</a>
                    </div>
                <div className="row justify-content-center">
                    <div className="col-12 mt-3">

                        <p className='lead'>
                            Founded in 2025, The Tipsy Panda started as a small boutique in the heart of the city. Today, we’ve grown into
                            a full-fledged online platform offering global spirits with heart and soul.
                        </p>
                        <p className="fw-bold">
                            Experience The Tipsy Panda <br />
                            Where every sip tells a story. Cheers to unforgettable moments!
                        </p>
                    </div>
                </div>

                </div>
            </section>



            {/* <!-- Our Values Section --> */}
            <section class="py-5">
                <div class="container">
                    <h2 class="text-center mb-5">Our values</h2>
                    <div class="row g-4">
                        {/* <!-- Value Item --> */}
                        <div class="col-md-4">
                            <div class="border rounded p-4 h-100">
                                <h5><i class="bi bi-lightbulb text-warning"></i> Innovation</h5>
                                <p>Inspired by the spirit of entrepreneurship, Zixflow pioneers innovative solutions that reshape business operations.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="border rounded p-4 h-100">
                                <h5><i class="bi bi-check-circle text-success"></i> Commitment</h5>
                                <p>Zixflow is committed to empowering entrepreneurs, standing by their side as they pursue their grand visions.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="border rounded p-4 h-100">
                                <h5><i class="bi bi-people"></i> Teamwork</h5>
                                <p>Within the Zixflow community, we foster collaboration and teamwork, uniting to craft a brighter future for entrepreneurs.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="border rounded p-4 h-100">
                                <h5><i class="bi bi-chat-square text-info"></i> Ownership</h5>
                                <p>Entrepreneurs using Zixflow take ownership of their dreams, while our platform handles the intricacies of growth.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="border rounded p-4 h-100">
                                <h5><i class="bi bi-eye text-subtle-gray"></i> Transparency</h5>
                                <p>At Zixflow, transparency is the cornerstone of trust, ensuring meaningful interactions with our platform and team.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="border rounded p-4 h-100">
                                <h5><i class="bi bi-bar-chart text-primary"></i> Growth</h5>
                                <p>Zixflow’s adaptable nature grows with entrepreneurs, providing the tools they need to thrive in a dynamic business world.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
        <div className="container text-center mt-5">
          <div className="col-sm-12">
            <h1>Our Team</h1>
          </div>
          <div className="row">
            <div className="col-sm-4"><h1>hello world</h1></div>
            <div className="col-sm-4"><h1>hello world</h1></div>
            <div className="col-sm-4"><h1>hello world</h1></div>
          </div>
        </div>
      </div> */}
            </section>

            <Team />
            {/* <Ai/> */}
            {/* <ChatBot/> */}
        </div>
    )
}

