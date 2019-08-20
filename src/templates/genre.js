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
    <Grid centered  columns={4}>
      {data.contentfulGenre.books.map(({ title, id, author, cover, genre, date, collection, pages }) => {
        return (
          <Grid.Column key={id} mobile={8} tablet={6} computer={4}>
            <Image
            fluid
            rounded
            src={cover.resize.src}
            alt={title}
            as='a'
            href={`/libros/${id}`}
            />
            <Header as='h5' style={{
              marginTop: '0.1rem',
            }}>
              <Link
                to={`/libros/${id}`}
                style={{
                  textTransform: 'uppercase',
                  color: 'black',
                  fontSize: '1em',
                  fontWeight: 'bold'
                }}
              >
                {title}
                <br/>
                <Header as='h6' style={{
                  marginTop: '0rem',
                }}>
                  {date}
                </Header>
              </Link>
            </Header>
            <Header.Subheader>
              <Header as='h6' color='grey' >
                <Link
                to={`/autores/${author[0].id}`}
                style={{
                  textDecoration: `none`,
                  textTransform: 'uppercase',
                  textAlign: 'left',
                  fontSize: '1.3em'
                }}
                >
                  {author[0].name}
                </Link>

                  <br/>
                   {pages} págs.
                  <br/>

                <Link
                  to={`/colecciones/${collection[0].id}`}
                  style={{
                    textTransform: 'uppercase',
                    textAlign: 'left',
                    color: 'grey',
                    fontWeight: '900'
                  }}>
                  ►{collection[0].name}
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

export const pageQuery = graphql`
  query genreQuery($id: String!) {
    contentfulGenre(id: { eq: $id }) {
      id
      name
      books {
        id
        title
        date
        pages
        author {
          id
          name
        }
        collection {
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
