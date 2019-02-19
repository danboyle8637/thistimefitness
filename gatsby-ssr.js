/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([<div key={'menu_portal'} id={'menu_portal'} />])
  setPostBodyComponents([
    <div key={'schedule_portal'} id={'schedule_portal'} />,
  ])
}