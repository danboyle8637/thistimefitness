/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  let currentPosition = getSavedScrollPosition(location)
  console.log(currentPosition)

  if (!currentPosition) {
    window.scrollTo(0, 0)
    return false
  } else {
    return currentPosition
  }
}
