import React from "react"
import { Link, graphql } from "gatsby"
import { Header, List, Divider } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="colecciones" />
    <Header as="h2" style={{
      textAlign: 'right',
    }}>COLECCIONES</Header>
    <Divider />
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
              <Header as='h4' style={{
                textTransform: 'uppercase',
                textAlign: 'right',
              }}>
                {node.name}
              </Header>
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
