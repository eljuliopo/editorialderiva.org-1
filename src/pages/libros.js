import React from "react"
import { Link, graphql } from 'gatsby'
import { Header, Grid, Image, Divider } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Catálogo" />
    <Header as="h2" style={{
      textAlign: 'right',
    }}>CATÁLOGO</Header>
    <Divider />
    <Grid  centered  columns={4}>
      {data.allContentfulBook.edges.map(({ node, id }) => {
        return (

          <Grid.Column key={node.id}  mobile={8} tablet={6} computer={4}>
          <Image
            fluid
            src={node.cover.resize.src}
            alt={node.id}
            as='a'
            href={`/libros/${node.id}`}  />
          <br/>
          <Link
            to={`/libros/${node.id}`}
            style={{
              textDecoration: `none`,
            }}
          >
            <Header as='h5' style={{
              textTransform: `uppercase`,
              textAlign: `left`,
            }}>
              {node.title}
            </Header>
          </Link>

            <Link
            to={`/autores/${node.author[0].id}`}
            style={{
              textDecoration: `none`,
            }}
            >
              <Header as='h5' color='grey' style={{
                textAlign: `left`,
              }}
              >
                {node.author[0].name}
              </Header>
            </Link>

          <Link
            to={`/colecciones/${node.collection[0].id}`}
            style={{
              textDecoration: `none`,
            }}
          >
            <Header as='h6' color='blue' style={{
              textTransform: `uppercase`,
              textAlign: `left`,
            }}
            >
              {node.collection[0].name}
            </Header>
          </Link>
          <br/>
          </Grid.Column>

        )
      })}
    </Grid>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulBook {
      edges {
        node {
          id
          title
          author {
            id
            name
            image {
              resize(width: 400) {
                src
              }
            }
          }
          cover {
            resize {
              src
            }
          }
          genre {
            id
            name
          }
          collection {
            id
            name
          }
        }
      }
    }
  }
`
