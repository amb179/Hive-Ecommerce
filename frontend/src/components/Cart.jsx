import React from 'react'
import product from '../assets/images/cart001.png'

function Cart() {
  return (
    // product cards

    <div class="cart">
      <h1>My Cart</h1>

      <div class="card">
        <img src={product} alt="" />
        <div class="card-bottom">
          <h4>Adidas Yeezy</h4>
          <p>Adidas originals men</p>
          <div class="cost">
            <p class="price">$1500</p>
            <button id="checkout" type="submit">Remove</button>
          </div>
        </div>
      </div>

      <div class="card">
        <img src={product} alt="" />
        <div class="card-bottom">
          <h4>Adidas Yeezy</h4>
          <p>Adidas originals men</p>
          <div class="cost">
            <p class="price">$1500</p>
            <button type="submit" id="checkout">Remove</button>
          </div>
        </div>
      </div>

      <div class="card">
        <img src={product} alt="" />
        <div class="card-bottom">
          <h4>Adidas Yeezy</h4>
          <p>Adidas originals men</p>
          <div class="cost">
            <p class="price">$1500</p>
            <button type="submit" id="checkout">Remove</button>
          </div>
        </div>
      </div>

      <div class="card">
        <img src={product} alt="" />
        <div class="card-bottom">
          <h4>Adidas Yeezy</h4>
          <p>Adidas originals men</p>
          <div class="cost">
            <p class="price">$1500</p>
            <button type="submit" id="checkout">Remove</button>
          </div>
        </div>
      </div>

      <div class="card">
        <img src={product} alt="" />
        <div class="card-bottom">
          <h4>Adidas Yeezy</h4>
          <p>Adidas originals men</p>
          <div class="cost">
            <p class="price">$1500</p>
            <button type="submit" id="checkout">Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart