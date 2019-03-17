import React from "react"
import { Link, graphql } from "gatsby"
import { Header, List } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Nuestros libros" />
    <Header as="h1">Nuestros libros</Header>
    <p>Revisa nuestros libros</p>
    <List>
      {data.allContentfulBook.edges.map(({ node, id }) => {
        return (
          <List.Item key={node.id}>
            <Link
              to={`/libros/${node.id}`}
              style={{
                textDecoration: `none`,
              }}
            >
              {node.title}
            </Link>
          </List.Item>
        )
      })}
    </List>
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
