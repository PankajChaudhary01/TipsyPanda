import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Vodka from './Vodka'
import Whiskey from './Whiskey'
import Beer from './Beer'
import Rum from './Rum'
import Navigation from './Navigation'
import Domestic from './Domestic'
import Cocktail from './Cocktail'
import ProductPage from './ProductPage'
import Address from './Address'
import Payment from './Payment'
import ThankYou from './ThankYou'
import Aboutus from './Aboutus'
import Service from './Service'
import ChatBot from './ChatBot'
export default function Layout() {
  const [cartData, setCart] = useState([]);
  function addToCart(data) {

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
      return;
    }

    setCart([...cartData, data]);
    alert("Product added in cart");

    // navigate("/cart");
  }

  

  function quanChange(data, val) {
    // console.log(data,val)
    // alert("hello world");
    var ind;
    cartData.forEach((myCart, index) => {
      if (myCart.Product_name == data.Product_name) {
        ind = index;
      }
    });

    cartData[ind].Product_quantity += val;

    if (cartData[ind].Product_quantity == 0) {
      // cartData[ind].Product_quantity=1;
      const filteredData = cartData.filter((myCartData, index) => index != ind);
      setCart(filteredData);
      return;
    }

    setCart([...cartData]);


  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation size={cartData.length} />}>
          <Route index element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/cart' element={<Cart myData={cartData} setCart={setCart} quanChange={quanChange} />} />
          <Route path='/vodka' element={<Vodka  addCart={addToCart}   />} />
          <Route path='/whiskey' element={<Whiskey addCart={addToCart} />} />
          <Route path='/Beer' element={<Beer  addCart={addToCart}   />} />
          <Route path='/Rum' element={<Rum  addCart={addToCart}   />} />
          <Route path='/Domestic' element={<Domestic  addCart={addToCart}   />} />
          {/* <Route path='/Cocktail' element={<Cocktail  addCart={addToCart}   />} /> */}
          <Route path='/ProductPage' element={<ProductPage cartData={cartData} setCart={setCart} />} />
          <Route path='/address' element={<Address />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/ThankYou' element={<ThankYou />} />
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='/ChatBot' element={<ChatBot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
