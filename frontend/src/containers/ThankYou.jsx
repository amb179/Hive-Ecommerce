import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function ThankYou() {
  return (
    <div>
      <Navbar />
      <div class="thank-you">
        <h1>Thank you for ordering</h1>
        <p>
          Thank you for your ordering. We recieved your request.
          Our staff will be contacting with you to tell next steps.
        </p>
      </div>
      <Footer />   
    </div>
  )
}

export default ThankYou