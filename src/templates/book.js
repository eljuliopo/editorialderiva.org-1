import React from "react"
import { Link, graphql } from "gatsby"
import { Header, Image, Divider, Label, Icon, Container, Grid } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <SEO title={data.contentfulBook.title} />
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={6}>
          <Image
            centered
            rounded
            src={data.contentfulBook.cover.resize.src}
            alt={data.contentfulBook.title}
          />

        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={10}>
<<<<<<< HEAD


          <div>
            <Header as="h3"  style={{
              textTransform: `uppercase`,
              textAlign: `right`,
=======
            <Divider />
          <div>
            <Header as="h3"  style={{
              textTransform: `uppercase`,
              textAlign: `left`,
>>>>>>> origin
            }}>
            {data.contentfulBook.title}{" "}
              <Header.Subheader>
                <Link to={`/autores/${data.contentfulBook.author[0].id}`}>
<<<<<<< HEAD
                  <Header as="h5" color='blue' style={{
                    textAlign: `right`,
=======
                  <Header as="h5" color='grey' style={{
                    textAlign: `left`,
>>>>>>> origin
                  }}>
                        <u>{data.contentfulBook.author[0].name}</u>
                  </Header>
                </Link>
              </Header.Subheader>
<<<<<<< HEAD
              <br />
=======
>>>>>>> origin
              <Header.Subheader>
                <Header as="h6" color='grey' style={{
                  textTransform: `uppercase`,
                  textAlign: `right`,
                }}>
                  Colección{" "}
                  <Link to={`/colecciones/${data.contentfulBook.collection[0].id}`}>
                  {data.contentfulBook.collection[0].name}
                  </Link>
                  <br/>
                  {data.contentfulBook.date} —{" "}
                  <Link to={`/generos/${data.contentfulBook.genre[0].id}`}>
                  {data.contentfulBook.genre[0].name}
                  </Link>
<<<<<<< HEAD
                  <br/>{data.contentfulBook.pages} págs. |  {data.contentfulBook.binding}
=======
                  <br/>{data.contentfulBook.pages} págs.
>>>>>>> origin
                </Header>
              </Header.Subheader>
            </Header>
            <Divider />
<<<<<<< HEAD
            <Container textAlign='right'>
            <Header as='h6' color='grey'  style={{
              textTransform: 'uppercase',
            }}>
            <i>« {data.contentfulBook.originalTitle} »</i>
            <br />
            {data.contentfulBook.publisher} ℗ {data.contentfulBook.year}

            <br/><br/>
            </Header>
            </Container>
=======
>>>>>>> origin
            <Container>
              {data.contentfulBook.abstract.content.map((paragraph, index) => {
                return (

                  <p
                  key={index}
                  style={{
                    textAlign: 'justify',
                    fontSize: '0.9em',
                  }}
                  >
                  {paragraph.content[0].value.trim()}
                  </p>

                )
              })}
              <Divider />
<<<<<<< HEAD

=======
              <Container textAlign='right'>
              <Header as='h6' style={{
                textTransform: 'uppercase',
              }}>
              <i>« {data.contentfulBook.originalTitle} »</i>
              <br />
              {data.contentfulBook.publisher} ℗ {data.contentfulBook.year}
              <br/><br/>

              Encuadernación {data.contentfulBook.binding}
              <br/><br/>
              </Header>
              </Container>
>>>>>>> origin
              <Container textAlign='right'>
              <Label basic color='black'>
              <Icon name='print' /> Valor impreso: ${data.contentfulBook.price}
              </Label>
              <Label as='a' basic color='blue' content='Versión digital' icon='book' href={data.contentfulBook.link} target='_blank' />
              </Container>

              </Container>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
)

export const pageQuery = graphql`
  query bookQuery($id: String!) {
    contentfulBook(id: { eq: $id }) {
      id
      title
      date
      originalTitle
      publisher
      year
      pages
      binding
      price
      link
      author {
        id
        name
        birth
        death
        image {
          resize(width: 300) {
            src
          }
        }
      }
      cover {
        resize(width: 600) {
          src
        }
      }
      collection {
        id
        name
      }
      genre {
        id
        name
      }
      abstract {
        content {
          content {
            value
          }
        }
      }
    }
  }
`
