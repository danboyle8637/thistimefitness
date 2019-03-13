/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const transitionWait = 250

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  let currentPosition = getSavedScrollPosition(location)

  if (!currentPosition) {
    setTimeout(() => window.scrollTo(0, 0), transitionWait)
    return [0, 0]
  } else {
    setTimeout(() => currentPosition, transitionWait)
  }
}

const injectFacebookMessenger = () => {
  function addDiv(divCode) {
    document.getElementById('fb-root').appendChild(divCode)
  }

  const div = `
    <div class="fb-customerchat"
      attribution=setup_tool
      page_id="143226049020904"
      theme_color="#21dbec"
      logged_in_greeting="Hi! If you have questions... I'm here"
      logged_out_greeting="Hi! If you have questions... I'm here">
    </div>
  `

  addDiv(div)
}

let injectedFBDiv = false

exports.onRouteUpdate = () => {
  if (document.getElementById('fb-root') !== null) {
    injectFacebookMessenger()
    injectedFBDiv = true
  }
}
