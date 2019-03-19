import React from 'react'

const FacebookMessenger = () => {
  return (
    <div
      class="fb-customerchat"
      page_id="143226049020904"
      theme_color="#21dbec"
      logged_in_greeting="Hi! If you have questions... I'm here!"
      logged_out_greeting="Hi! Login to Facebook and let's talk!"
      greeting_dialog_display="fade"
      greeting_dialog_delay="3"
    />
  )
}

export default FacebookMessenger
