import React from 'react'

function Checkout() {
  return (
    // <hr id="cart">
    <div class="checkout">
      <div class="total">
        <p>SUBTOTAL:</p>
        <p>$3050</p>
      </div>
      <p class="items">5 - ITEMS</p>
      <button type="submit">PROCEED TO CHECKOUT</button>
    </div>
  )
}

export default Checkout