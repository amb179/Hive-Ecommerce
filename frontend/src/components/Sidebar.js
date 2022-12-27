import React from 'react'

function Sidebar() {
  return (
    <section className='body'>
      <div class="column1">
        <div class="filter">
          <div class="dropdown">
            <button class="dropbtn" onclick="myFunction()">
              FILTER BY GENDER
            </button>
            <div class="dropdown-content">
              <a href="#men">Men's</a>
              <a href="#women">Women's</a>
            </div>
          </div>
        </div>
        <div class="category">
          <h3>Category Lists</h3>
          <div class="dropdown">
            <span>Shirts</span>
            <div class="dropdown-content"></div>
          </div>
          <div class="dropdown">
            <span>Bottoms</span>
            <div class="dropdown-content"></div>
          </div>
          <div class="dropdown">
            <span>Hats</span>
            <div class="dropdown-content"></div>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default Sidebar