import React from "react"
import { Link, graphql } from 'gatsby'
import { Header, Grid, Image, Divider, Label } from "semantic-ui-react"

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
              rounded='left'
              src={node.cover.resize.src}
              alt={node.id}
              as='a'
              label={{ as: 'a', color: 'grey', content: node.genre[0].name, attached: 'top right', size: 'tiny', href: `/generos/${node.genre[0].id}` }}
              href={`/libros/${node.id}`} />

            <Header as='h5' style={{
              marginTop: '0.1rem',
            }}>
            <Link
              to={`/libros/${node.id}`}
              style={{
                textTransform: 'uppercase',
                color: 'black',
                fontSize: '1em',
                fontWeight: 'bold'
              }}
            >

                {node.title}
            </Link>
            </Header>
            <Header.Subheader>
              <Header as='h6' color='grey' >
                <Link
                to={`/autores/${node.author[0].id}`}
                style={{
                  textDecoration: `none`,
                  textTransform: 'uppercase',
                  textAlign: 'left',
                  fontSize: '1.3em'
                }}
                >
                  {node.author[0].name}
                  </Link>
                  {" "}{node.year}
                  <br/>
                   {node.pages} págs.
                  <br/>
                  <Link
                  to={`/colecciones/${node.collection[0].id}`}
                  style={{
                    textTransform: 'uppercase',
                    textAlign: 'left',
                    color: 'grey'
                  }}>
                  ►{node.collection[0].name}
                  </Link>

                </Header>
            <br/>
            </Header.Subheader>
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
          pages
          year
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
