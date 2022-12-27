import React from 'react'
import facebook from '../assets/images/icons8-facebook-150.svg'
import instagram from '../assets/images/icons8-instagram-150.svg'

function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <div class="column-shop">
          <H2>Shop and Learn</H2>
          <ul>
            <li>
              <a href="#signup">Sign Up</a>
            </li>
            <li>
              <a href="#signin">Sign In</a>
            </li>
            <li>
              <a href="#itemlist">Item lists</a>
            </li>
          </ul>
        </div>
        
        <div class="column-support">
          <H2>Support</H2>
          <ul>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <img src={facebook} alt="facebook" />
      <img src={instagram} alt="instagram" />
      <hr />
      <p>
        Copyright © 2021 HIVE Techwear. All rights reserved. Privacy Policy |
        Terms of Use Sales Policy | Legal | Site | Map
      </p>
    </div>
  )
}

export default Footer