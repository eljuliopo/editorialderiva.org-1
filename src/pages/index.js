import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"

export default () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Home />
  </Layout>
)
