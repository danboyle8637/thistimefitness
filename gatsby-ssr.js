/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'

const facebookMessenger = `
<div class="fb-customerchat"
attribution=setup_tool
page_id="143226049020904"
theme_color="#21dbec"
logged_in_greeting="Hi! If you have questions... I'm here"
logged_out_greeting="Hi! If you have questions... I'm here">
</div>
`

export const onRenderBody = ({ setPostBodyComponents, pathname }) => {
  setPostBodyComponents([
    <div key={'menu_portal'} id={'menu_portal'} />,
    <div key={'schedule_portal'} id={'schedule_portal'} />,
    <div key={'blog_menu_portal'} id={'blog_menu_portal'} />,
  ])

  if (
    pathname !== '/' ||
    pathname !== '/privacy' ||
    pathname !== '/disclaimer'
  ) {
    setPostBodyComponents([
      <div
        key={'fb-messenger-div'}
        dangerouslySetInnerHTML={{ __html: facebookMessenger }}
      />,
    ])
  }
}
