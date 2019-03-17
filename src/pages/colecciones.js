import React from "react"
import { Link, graphql } from "gatsby"
import { Header, List } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Nuestras colecciones" />
    <Header as="h1">Nuestras colecciones</Header>
    <p>Revisa nuestras colecciones</p>
    <List>
      {data.allContentfulCollection.edges.map(({ node, id }) => {
        return (
          <List.Item key={node.id}>
            <Link
              to={`/colecciones/${node.id}`}
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
