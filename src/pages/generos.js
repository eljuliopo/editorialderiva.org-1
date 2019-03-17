import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Géneros" />
    <h1>Géneros</h1>
    <p>Revisa por género</p>
    <ul>
      {data.allContentfulGenre.edges.map(({ node, id }) => {
        return (
          <li key={node.id}>
            <Link to={`/generos/${node.id}`}>{node.name}</Link>
          </li>
        )
      })}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulGenre {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
