import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Nuestros libros" />
    <h1>Nuestros libros</h1>
    <p>Revisa nuestros libros</p>
    <ul>
      {data.allContentfulBook.edges.map(({ node, id }) => {
        return (
          <li key={node.id}>
            <Link to={`/libros/${node.id}`}>{node.title}</Link>
          </li>
        )
      })}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulBook {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
