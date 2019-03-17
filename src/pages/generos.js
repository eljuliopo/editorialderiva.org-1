import React from "react"
import { Link, graphql } from "gatsby"
import { Header, List } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Géneros" />
    <Header as="h1">Géneros</Header>
    <p>Revisa por género</p>
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
