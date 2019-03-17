import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Nuestras colecciones" />
    <h1>Nuestras colecciones</h1>
    <p>Revisa nuestras colecciones</p>
    <ul>
      {data.allContentfulCollection.edges.map(({ node, id }) => {
        return (
          <li key={node.id}>
            <Link to={`/colecciones/${node.id}`}>{node.name}</Link>
          </li>
        )
      })}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulCollection {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
