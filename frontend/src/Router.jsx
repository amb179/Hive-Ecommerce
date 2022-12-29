import {Route, Routes, BrowserRouter} from "react-router-dom";
import ThankYou from './containers/ThankYou';
import Home from './containers/Home';
import Checkout from './containers/Checkout';



import React from 'react'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router