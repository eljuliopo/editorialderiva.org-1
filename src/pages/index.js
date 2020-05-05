import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Indexcover from "../components/indexcover"
import Home from "../components/home"

export default () => (
  <div>
  <Indexcover />
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Home></Home>
  </Layout>
  </div>
)
