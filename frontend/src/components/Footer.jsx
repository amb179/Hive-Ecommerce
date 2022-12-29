import React from 'react'
import facebook from '../assets/images/icons8-facebook-150.svg'
import instagram from '../assets/images/icons8-instagram-150.svg'

function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <div class="column-shop">
          <p id='foot'>Shop and Learn</p>
          <a href="#signup">Sign Up</a>     
          <a href="#signin">Sign In</a>     
          <a href="#itemlist">Item lists</a>
        </div>
        
        <div class="column-support">
          <p id='foot'>Support</p>
          <a href="#contact">Contact Us</a>
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