import React from "react"
import { Link, graphql } from "gatsby"
import { Header, List, Flag, Image, Container, Grid, Divider } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title={data.contentfulAuthor.name} />
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={4}>

            <Image
            size='big'
            src={data.contentfulAuthor.image.resize.src}
            alt={data.contentfulAuthor.name}
            />

        </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={12}>
        <Header as="h3" style={{textTransform:'uppercase',textAlign:'left', paddingTop:'0.5em',}}>
        {data.contentfulAuthor.name}
          <Header.Subheader bold='true' style={{
            textAlign: 'left',
            fontSize:'0.5em',
            fontWeight: 'strong',
          }}>
          <Flag name={data.contentfulAuthor.country} /> <br />
           {data.contentfulAuthor.birth} — {data.contentfulAuthor.death}
          </Header.Subheader>
        </Header>
        <Divider/>
        <Container>
          {data.contentfulAuthor.biography.biography}
        </Container>
      </Grid.Column>

      </Grid.Row>
    </Grid>
    <Divider />
    <List>
    <Header as='h4' textAlign='centered'>
    En esta editorial:
    </Header>

    <Grid centered columns={4}>
    {data.contentfulAuthor.books.map(({ title, id, cover, date, genre }) => {
      return (
          <Grid.Column key={id}  mobile={8} tablet={6} computer={4}>
            <List.Item key={id} align='left'>
            <Link
            to={`/libros/${id}`}
            style={{
              textDecoration: `none`,
              textTransform: 'uppercase',
              fontSize: '0.8em'
            }}
            >
            <Image
            fluid
            right
            rounded
            src={cover.resize.src}
            alt={title}
            size='small'
            label={{ as: 'a', color: 'grey', content: genre[0].name, attached: 'top right', size: 'tiny', href: `/generos/${genre[0].id}` }}
            />
            <b>{title}</b>
            <br/>
            <Header as='h6' style={{
              marginTop: '0rem',
            }}>
              {date}
            </Header>
            </Link>

            </List.Item>
          </Grid.Column>
      )
    })}
    </Grid>
    </List>
  </Layout>
)

export const pageQuery = graphql`
  query authorQuery($id: String!) {
    contentfulAuthor(id: { eq: $id }) {
      id
      name
      image {
        resize(width: 250) {
          src
        }
      }
      country
      birth
      death
      biography {
        biography
      }
      books {
        id
        title
        date
        genre {
          id
          name
        }
        cover {
          resize(width: 150) {
            src
          }
        }

      }
    }
  }
`
