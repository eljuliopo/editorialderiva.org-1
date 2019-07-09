import React from "react"
import { Link, graphql } from "gatsby"
import { Header, Grid, Divider, Image } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title={data.contentfulGenre.name} />
    <Header as="h3" style={{
      textTransform: 'uppercase',
      textAlign: 'right',
    }}>{data.contentfulGenre.name}</Header>
    <Divider />
    <Grid>
      {data.contentfulGenre.books.map(({ title, id, author, cover, genre }) => {
        return (
          <Grid.Column key={id} mobile={8} tablet={3} computer={3}>
            <Image
            fluid
            src={cover.resize.src}
            alt={title}
            as='a'
            href={`/libros/${id}`}
            />

            <Link
              to={`/libros/${id}`}
              style={{
                textDecoration: `none`,
              }}
            >
              <Header as='h5' style={{
                textTransform: 'uppercase'
              }}>
                {title}
              </Header>
            </Link>
            <Link
              to={`/autores/${author[0].id}`}>
              <Header color='grey' as='h5'>
                {author[0].name}
              </Header>
            </Link>
            <Link
              to={`/generos/${genre[0].id}`}>
                <Header color='blue' as='h6' style={{
                  textTransform: 'uppercase'
                }}>
                 {genre[0].name}
                </Header>
             </Link>
          </Grid.Column>
        )
      })}
    </Grid>
  </Layout>
)

export const pageQuery = graphql`
  query genreQuery($id: String!) {
    contentfulGenre(id: { eq: $id }) {
      id
      name
      books {
        id
        title
        date
        author {
          id
          name
        }
        cover  {
          resize(width: 400) {
            src
          }
        }
        genre {
          id
          name
        }
      }
    }
  }
`
