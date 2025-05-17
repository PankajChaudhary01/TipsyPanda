import React from 'react'
import Budwiser from '../Image1/Budwiser.jpg'
import Bacardi from '../Image1/Bacardi.jpg'
import Baileys from '../Image1/Baileys.jpg'
import Absolut from '../Image1/Absolut.jpg'
import Chivas from '../Image1/Chivas.jpg'
import JackDaniels from '../Image1/JackDaniels.jpg'
import Johnnie from '../Image1/Johnnie.jpg'
import Remy from '../Image1/RemyMartin.jpg'
import Simronff from '../Image1/Smirnoff.jpg'
import Tanq from '../Image1/Tanqueray.jpg'

export default function TopBrands() {
    const brands = [Budwiser, Bacardi, Baileys, Absolut, Chivas, Tanq, JackDaniels, Johnnie, Remy, Simronff];

    return (
        <div className="container mt-5">
            <h2
                className="mb-4 text-center fw-bold fs-1 lead"
                style={{ fontFamily: "'Courier New', monospace" }}
            >
                Top Brands
            </h2>

            <div className="row justify-content-center">
                {brands.map((brand, index) => (
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex justify-content-center" key={index}>
                        <img src={brand} className="img-fluid zoom" alt={`Brand ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
