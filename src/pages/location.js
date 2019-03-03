import React from 'react'

import Layout from '../components/layout'
import LocationMap from '../components/About/LocationMap/LocationMap'
import SEO from '../components/seo'
import { siteConfig } from '../helpers/siteConfig'

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
      <LocationMap />
    </Layout>
  )
}

export default Location
