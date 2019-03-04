import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import LocationMap from '../components/About/LocationMap/LocationMap'
import TextHeader from '../components/Shared/TextHeader'
import SEO from '../components/seo'
import { siteConfig } from '../helpers/siteConfig'
import { above } from '../styles/Theme'

const Location = () => {
  return (
    <Layout>
      <SEO
        title={siteConfig.location.title}
        description={siteConfig.location.description}
        url={siteConfig.location.url}
        keywords={siteConfig.location.keywords}
        lang={siteConfig.location.lang}
      />
      <LocationSection>
        <TextHeader
          word={'Location'}
          tagLine={`We're Right Down The Street`}
          fontSize={'54px'}
          letterSpacing={'1.6'}
          purple
        />
        <LocationMap />
      </LocationSection>
    </Layout>
  )
}

export default Location

const LocationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #26243e;
  ${above.tablet`
    background: #2b2947;
  `}
`
