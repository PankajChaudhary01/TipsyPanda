import React from 'react'
import Location from '../Images/HowItWork/Location.png'
import Item from '../Images/HowItWork/Item.png'
import Delivery from '../Images/HowItWork/Delivery.png'

export default function HowItWork() {
    return (
        <div className="container  ">
            <div className="row">
                <div className="col-sm-12 my-5">
                    <h1 className='text-center'>How it works</h1>

                </div>
                <div className="col-sm-4 text-center   ">
                    <img src={Location} alt="" />
                    <h3 className='fw-bold'>Enter your address</h3>
                    <p className='lead'>Once you tell your location, we'll show you what's available in your local stores.</p>
                </div>
                <div className="col-sm-4  text-center">
                    <img src={Item} alt="" />
                    <h3 className='fw-bold'>Shop items you like</h3>
                    <p className='lead'>Select your favorite items, compare price and shop from multiple stores at once</p>
                </div>
                <div className="col-sm-4  text-center">
                    <img src={Delivery} alt="" />
                    <h3 className='fw-bold'>Get your items delivered</h3>
                    <p className='lead'>Store will deliver your order, or you can select to pickup from the store at your convenience.</p>
                </div>

            </div>
            {/* <div className="col-sm-12 text-center">
        <span class="btn btn-primary pointer text-nowrap text-white ">Start Shopping</span>
        </div> */}

        </div>
    )
}
