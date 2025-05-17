import React from 'react';
import styled from 'styled-components';
import TipsyVodka from '../Json_data/Vodka'
import { useNavigate } from 'react-router-dom'
const Vodka = ({addCart}) => {
    const navigate = useNavigate();

    function detail(data) {
      navigate("/ProductPage", { state: { data } });
    }
  return (
    <div className="container">
      <div className="row">
        <div className="row my-5"></div>
      {
          TipsyVodka.map((data) => (
        <div className="col-sm-4">
          <StyledWrapper>
            <div className="card my-5">
              <div className="remove-when-use">
                <img src={data.Product_image[0].mainImg} alt=""   />
              </div>
              <div className="details">
                <label>{data.Product_name}</label>
                <br />
                <p className='fs-5'>₹{data.Product_price}</p>
                <p>
                {data.Description}
                </p>
                <button className='btn btn-outline-light' onClick={() => addCart(data)}>Add to cart</button>
                  <button className='btn btn-outline-light ms-3' onClick={() => detail(data)}>Details</button>
              </div>
            </div>
          </StyledWrapper>
        </div>
          ))
        }
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 415px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    position: relative;
  }

  img{
    height:400px;
    width:100%;
  }

  .remove-when-use {
    text-align: center;
    width: 100%;
    position: absolute;
    color: black;
    font-weight: bold;
  }

  .details > p {
    font-size: .8em;
    
  }

  .details > label {
    font-weight: bold;
  }

  .details {
    color: white;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    bottom: 0;
    height: 4em;
    transition: height .5s ease-in-out;
    padding: 0.6em;
    overflow: hidden;
  }

  .card:hover > .details {
    height: 11em;
  }`;

export default Vodka;
