import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Nuestros autores" />
    <h1>Nuestros autores</h1>
    <p>Revisa nuestros autores</p>
    <ul>
      {data.allContentfulAuthor.edges.map(({ node, id }) => {
        return (
          <li key={node.id}>
            <Link to={`/autores/${node.id}`}>{node.name}</Link>
          </li>
        )
      })}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulAuthor {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
