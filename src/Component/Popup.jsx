import React, { useRef } from 'react'
import TipsyPanda from '../Images/TipsyPanda.png'
export default function Popup() {
    const box=useRef();

    function hide(){
        box.current.style.display="none";
    }

    return (
        <div className="container-fluid fixed-top" ref={box} style={{ zIndex: 100, paddingTop: 200,backgroundColor:'rgba(0,0,0,0.9)', height:'100%'}}>
            <div className="row ">
                <div className="col-sm-2 col-lg-4"></div>
                <div className="col-sm-8 col-lg-4 m-0">
                    <div className="text-center bg-white p-4 rounded shadow " >
                        <div className="mb-3"><img src={TipsyPanda} alt="" width='50px' /><h6 className='fw-bold lead'>TipsyPanda</h6></div>

                        <h4 className="fw-bold mb-2">Are you 21 or older?</h4>
                        <p className="text-muted">You must be of legal drinking age to enter this site.</p>

                        <div className="d-flex justify-content-center gap-3 my-4">
                            <button className="btn btn-outline-dark  px-4">No</button>
                            <button className="btn btn-yes btn-outline-success px-4" onClick={hide}>Yes</button>
                        </div>

                        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                            Live Freely. Drink Responsibly.
                        </p>
                    </div>
                </div>
                <div className="col-sm-2  col-lg-4"></div>
            </div>
        </div>
    )
}
