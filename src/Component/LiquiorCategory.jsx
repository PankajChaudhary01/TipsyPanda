import React from 'react'
import beer from '../Image2/Beer.jpg'
import brandy from '../Image2/brandy.jpg'
import gin from '../Image2/gin.jpg'
import rum from '../Image2/rum.jpg'
import tequila from '../Image2/tequila.jpg'
import vodka from '../Image2/vodka.jpg'
import whiskey from '../Image2/whiskey.jpg'
import wine from '../Image2/wine.jpg'



export default function LiquiorCategory() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-sm-3"> <img src={beer} className='img-fluid zoom' width="200px" alt="" /> <h3>Beer</h3> </div>
                <div className="col-sm-3"> <img src={brandy} className='img-fluid zoom' width="200px" alt="" /> <h3>Brandy</h3> </div>
                <div className="col-sm-3"> <img src={gin} className='img-fluid zoom' width="200px" alt="" /> <h3>Gin</h3> </div>
                <div className="col-sm-3"> <img src={rum} className='img-fluid zoom' width="200px" alt="" /> <h3>rum</h3> </div>
            </div>
            <div className="row">
                <div className="col-sm-3"><img src={tequila} className='img-fluid zoom' width="200px" alt="" /> <h3>Tequila</h3> </div>
                <div className="col-sm-3"><img src={vodka} className='img-fluid zoom' width="200px" alt="" /> <h3>Vodka</h3> </div>
                <div className="col-sm-3"><img src={whiskey} className='img-fluid zoom' width="200px" alt="" /> <h3>Whiskey</h3> </div>
                <div className="col-sm-3"><img src={wine} className='img-fluid zoom' width="200px" alt="" /> <h3>wine</h3> </div>
            </div>
        </div>
    )
}
