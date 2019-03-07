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
