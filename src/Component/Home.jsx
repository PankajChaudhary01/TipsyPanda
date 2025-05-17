import React from 'react'
import Slider from './Slider'
import Category from './Category'
import HowItWork from './HowItWork'
import Popup from './Popup'
import TopBrands from './TopBrands'
import LiquiorCategory from './LiquiorCategory'
import MyMap from './MyMap'
import Review from './Review'
import Ai from './Ai'
export default function Home() {
  return (
    <div  >
      <Popup />
      <Slider />
      <Category />
      <br /> <br />
      <LiquiorCategory/>
      <HowItWork />
      <br /> <br />
      <TopBrands/>
      <Review/>
      <MyMap/>
      <Ai/>
    </div>
  )
}
