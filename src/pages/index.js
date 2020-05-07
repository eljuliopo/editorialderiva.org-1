import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Indexcover from "../components/indexcover"
import Home from "../components/home"
import Corteindex from "../components/corteindex"

export default () => (
  <div>
  <Indexcover />
  <Corteindex />
  <Layout>
    <Home></Home>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
  </div>
)
