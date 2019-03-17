import React from "react"
import { Header } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header as="h1">NOT FOUND</Header>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)
