import React from "react"
import { Link, graphql } from "gatsby"
import { Header, List } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title={data.contentfulCollection.name} />
    <Header as="h1">{data.contentfulCollection.name}</Header>
    <List>
      {data.contentfulCollection.books.map(({ title, id }) => {
        return (
          <List.Item key={id}>
            <Link
              to={`/libros/${id}`}
              style={{
                textDecoration: `none`,
              }}
            >
              {title}
            </Link>
          </List.Item>
        )
      })}
    </List>
  </Layout>
)

export const pageQuery = graphql`
  query collectionQuery($id: String!) {
    contentfulCollection(id: { eq: $id }) {
      id
      name
      books {
        id
        title
      }
    }
  }
`
