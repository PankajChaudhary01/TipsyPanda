import React, { useEffect, useState } from 'react'
import trash from '../Images/trash.gif'
import { Link } from 'react-router-dom'
export default function Cart({ myData, setCart, quanChange }) {
  const [total, setTotal] = useState(0);
  function del(id) {
    const filteredData = myData.filter((cartData, index) => index != id);
    setCart(filteredData);
    alert("Product deleted sucessfully from cart");
  }

  useEffect(() => {
    var tot = 0;
    myData.forEach((data) => { tot += data.Product_price * data.Product_quantity });
    setTotal(tot);
  })
  return (
    <div>
      <div className="row my-5"></div>
      <table className='table text-center table-bordered'>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Description</th>
          <th>Total</th>
          <th>Delete</th>
        </tr>

        {
          myData.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{data.Product_name}</td>
              <td><img src={data.Product_image[0].mainImg} alt="" width="70px" /></td>
              <td className='fw-bold'>
                <button className='btn btn-danger' onClick={() => quanChange(data, -1)}>-</button>
                <span> {data.Product_quantity}</span>
                <button className='btn btn-success' onClick={() => quanChange(data, 1)}>+</button>
              </td>
              <td>{data.Product_price}</td>
              <td>{data.Description}</td>
              <td>{data.Product_quantity * data.Product_price}</td>
              <td><img src={trash} width="50px" onClick={() => del(index)} className='trash' /></td>
            </tr>
          ))
        }
      </table>
      {myData.length>0 ? 
   <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9"></div>
          <div className="col-sm-1"><h3>Total :-</h3></div>
          <div className="col-sm-2"><h3>{total}</h3></div>
        </div>

      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9"></div>
          <div className="col-sm-2"></div>
          <div className="col-sm-1">
          <Link to="/address"><button className='btn btn-outline-success  btn-lg' >Continue</button></Link>
             
          </div>
        </div>
      </div>
   </>
 : <></>}
    </div>
  )
}
