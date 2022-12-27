import React from 'react'
import brand from '../assets/images/HIVETechwear.svg'
import search from '../assets/images/search.svg'
import cart from '../assets/images/cart.png'

function Navbar() {
  return (
    <div class="nav">
        <div class="brand">
          <a href="#home"><img id="brand" src={brand} alt="" /></a>
        </div>
        <div class="bar">
          <div class="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">
                <img src={search} alt="" />
              </button>
            </form>
          </div>
          <a href="#signin">Sign In</a>
          <a href="#signup">Sign Up</a>
          <a href="#cart"><img src={cart} alt="" /></a>
        </div>
      </div>
  )
}

export default Navbar