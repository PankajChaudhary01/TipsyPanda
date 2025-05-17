import React from 'react'
import TipsyCocktail from '../Json_data/Cocktail'
import {useNavigate} from 'react-router-dom'

export default function Cocktail() {
    const navigate=useNavigate();
    function detail(data){
        navigate("/ProductPage",{state:{data}})
    }
  return (
    <div className='container-fluid'>
        <div className="row my-5"></div>
            <div className="row">
                {
                    TipsyCocktail.map((data) => (
                        <div className="col-sm-4 text-center my-3">
                            <div className="card p-3 h-100 ">
                                <img src={data.Product_image} alt="" className='card-img-top' height="550px" />
                                <div className="card-body ">
                                    <h3 className='card-heading'>{data.Product_name}</h3>
                                    <h3 className='card-text my-3'>Price : ₹{data.Product_price}</h3>
                                    <h6 className='card-text my-3'>{data.Description}</h6>
                                    <button className='btn btn-warning'>Add to cart</button>
                                    <button className='btn btn-primary ms-3' onClick={()=>detail(data)}>Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}
