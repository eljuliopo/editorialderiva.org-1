import React from "react"
import { Link, graphql } from "gatsby"
import { Header, List, Divider } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Géneros" />
    <Header as="h2" style={{
      textAlign: 'right',
    }}>GÉNEROS</Header>
    <Divider />
    <List>
      {data.allContentfulGenre.edges.map(({ node, id }) => {
        return (
          <List.Item key={node.id}>
            <Link
              to={`/generos/${node.id}`}
              style={{
                textDecoration: `none`,
              }}
            >
              <Header as='h4' style={{
                textAlign: 'right',
                textTransform: 'uppercase',
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
