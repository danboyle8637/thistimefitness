import React from 'react'

import { BodyText } from '../../../styles/BodyText'

const BodyCopy = ({ children }) => {
  return (
    <BodyText marginTop={'60px'} padding={'0px 20px'}>
      {children}
    </BodyText>
  )
}

export default BodyCopy
