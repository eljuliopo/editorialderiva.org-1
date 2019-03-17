import React from "react"
import { Link, graphql } from "gatsby"
import { Header, List } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Nuestros autores" />
    <Header as="h1">Nuestros autores</Header>
    <p>Revisa nuestros autores</p>
    <List>
      {data.allContentfulAuthor.edges.map(({ node, id }) => {
        return (
          <List.Item key={node.id}>
            <Link
              to={`/autores/${node.id}`}
              style={{
                textDecoration: `none`,
              }}
            >
              {node.name}
            </Link>
          </List.Item>
        )
      })}
    </List>
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
