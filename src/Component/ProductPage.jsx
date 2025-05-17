import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useLocation} from 'react-router-dom' 
import {Link} from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
const ProductPage = ({cartData,setCart}) => {

    const locate=useLocation();

    const myData=locate.state.data;
    // console.log(myData);

    const navigate = useNavigate();
    function buyNow(data) {
      // alert("Buy now");
      var ind;
      var myVar = false;
      cartData.forEach((cartData, index) => {
        if (cartData.Product_name == data.Product_name) {
          ind = index;
          myVar = true;
        }
      });
  
      if (myVar) {
        cartData[ind].Product_quantity += 1;
  
        setCart([...cartData]);
        alert("Product quantity updated in cart");
        navigate("/cart");
        return;
      }
  
      setCart([...cartData, data]);
      alert("Product added in cart");
      navigate("/cart");
    }

  return (
    <div className="container  my-5">
      <div className="row">
      <div className="row my-5"></div>
        {/* Product Image Section */}
        <div className="col-md-6 text-center ">
          <img
            src={myData.Product_image[0].mainImg}
            alt="Alpha Blue Whiskey"
            // className="img-fluid rounded"
            height="300px"
          />
         <div className="row mt-5">
         <div className="col-sm-6">
            <img src={myData.Product_image[0].img1} height={"300px"} className=" rounded" alt="" />
          </div>
          <div className="col-sm-6">
            <img src={myData.Product_image[0].img2} height={"300px"} className=" rounded" alt="" />
          </div>
          {/* <div className="col-sm-3">
            <img src={myData.Product_image[0].img3} className="img-fluid rounded" alt="" />
          </div>
          <div className="col-sm-3">
            <img src={myData.Product_image[0].img4} className="img-fluid rounded" alt="" />
          </div> */}
         </div>
        </div>

        {/* Product Details Section */}
        <div className="col-md-6">
          <h2>{myData.Product_name}</h2>
          {/* <p className="text-muted">Spanish Winery</p> */}

          {/* Price */}
          <div className="mb-3">
            <span className="text-decoration-line-through text-muted me-2">$139.00</span>
            <span className="fs-4 fw-bold text-danger">${myData.Product_price}</span>
          </div>

          {/* Rating */}
          <div className="mb-3 text-warning fs-5">★★★★★</div>

          {/* Description */}
          <p>
            {myData.Description}
          </p>

          {/* Quantity Selector & Buy Now Button */}
          <div className="d-flex align-items-center mb-4">
            <input
              type="number"
              className="form-control me-2"
              style={{ width: "80px" }}
              value={myData.Product_quantity}
            />
           {/* <Link to="/cart" > <button className="btn btn-warning px-4 fw-bold"  >BUY NOW</button></Link> */}
           <button className="btn btn-warning px-4 fw-bold" onClick={()=>buyNow(myData)} >BUY NOW</button>
          </div>

         

          {/* Customer Support Section */}
          <div className="mt-4 p-3 bg-light rounded">
            <p className="mb-1"><strong>Need Help? Call Us:</strong></p>
            <p className="mb-0">+91 9982476513</p>
            <p className="mb-0">Monday – Friday 9:00 – 17:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
