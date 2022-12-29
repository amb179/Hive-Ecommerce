import React from 'react'
import Footer from '../components/Footer'
import CartNav from '../components/CartNav'
import Cart from '../components/Cart'

function Checkout() {
  return (
    // <hr id="cart">
    <div>
      <CartNav />
      <Cart />
      <div className="line"></div>
      <div class="checkout">
        <div class="total">
          <p>SUBTOTAL:</p>
          <p>$3050</p>
        </div>
        <p class="items">5 - ITEMS</p>
        <button type="submit">PROCEED TO CHECKOUT</button>
      </div>
      <Footer />
    </div>
    
  )
}

export default Checkout