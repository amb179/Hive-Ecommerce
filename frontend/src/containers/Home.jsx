import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageNumber from '../components/PageNumber'
import product from '../assets/images/cart001.png'


function Home() {
  return (
    <div>
      <Navbar />
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
        <div class="column2">
          <h1>T - Shirts</h1>
          <h3>Men's</h3>

          <div class="card">
            <img src={product} alt="" />
            <div class="card-bottom">
              <h4>Adidas Yeezy</h4>
              <p>Adidas originals men</p>
              <div class="cost">
                <p class="price">$1500</p>
                <button type="submit">Add +</button>
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
                <button type="submit">Add +</button>
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
                <button type="submit">Add +</button>
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
                <button type="submit">Add +</button>
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
                <button type="submit">Add +</button>
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
                <button type="submit">Add +</button>
              </div>
            </div>
          </div>

          <h3>Women's</h3>

          <div class="card">
            <img src={product} alt="" />
            <div class="card-bottom">
              <h4>Adidas Yeezy</h4>
              <p>Adidas originals men</p>
              <div class="cost">
                <p class="price">$1500</p>
                <button type="submit">Add +</button>
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
                <button type="submit">Add +</button>
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
                <button type="submit">Add +</button>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <PageNumber />
      <Footer />
    </div>
   
  )
}

export default Home