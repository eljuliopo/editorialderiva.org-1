import React from "react"
import { Link, graphql } from "gatsby"
import { Header, List, Flag, Image, Container, Grid, Divider} from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title={data.contentfulAuthor.name} />
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Image
          left
          circular
          centered
          size='medium'
          src={data.contentfulAuthor.image.resize.src}
          alt={data.contentfulAuthor.name}
          />

        </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={12}>
        <Header as="h2" style={{textTransform:'uppercase',textAlign:'right'}}>
        <Flag name={data.contentfulAuthor.country} />{data.contentfulAuthor.name}
          <Header.Subheader bold='true' style={{
            textAlign: 'right',
            fontSize:'0.5em',
            fontWeight: 'strong',
          }}>
           {data.contentfulAuthor.birth} <br/>{data.contentfulAuthor.death}
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
    <Header as='h4' textAlign='right'>
    En esta editorial:
    </Header>

    {data.contentfulAuthor.books.map(({ title, id, cover }) => {
      return (

        <List.Item key={id} align='right'>
        <Link
        to={`/libros/${id}`}
        style={{
          textDecoration: `none`,
        }}
        >
        <Image
        right
        src={cover.resize.src}
        alt={title}
        />
        <Header as='h6' style={{
          textTransform: 'uppercase'
        }}>
        {title}
        </Header>
        </Link>

        </List.Item>
      )
    })}
    </List>
  </Layout>
)

export const pageQuery = graphql`
  query authorQuery($id: String!) {
    contentfulAuthor(id: { eq: $id }) {
      id
      name
      image {
        resize(width: 300) {
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
        cover {
          resize(width: 150) {
            src
          }
        }

      }
    }
  }
`
