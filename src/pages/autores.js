import React from "react"
import { Link, graphql } from "gatsby"
import { Header, Grid, Flag, Item, Divider } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Autores" />
    <Header as="h2" style={{
      textAlign: 'right',
    }}>AUTORES</Header>
    <Divider />
    <Grid columns={2}>
      {data.allContentfulAuthor.edges.map(({ node, id }) => {
        return (
          <Grid.Column key={node.id} mobile={16} tablet={8} computer={8}>
            <Item.Group relaxed unstackable divided>
              <Item>
                <Item.Image
                  fluid
                  centered
                  rounded
                  size='small'
                  src={node.image.resize.src}
                  alt={node.id}
                  as='a'
                  href={`/autores/${node.id}`}  />


                  <Item.Content verticalAlign='middle'>
                    <Item.Header as='a' href={`/autores/${node.id}`} >
                      <Header as='h3' style={{
                        textTransform: 'uppercase'
                      }}> {node.name}</Header>
                    </Item.Header>
                      <p><Flag name={node.country} /></p>
                    <Item.Description>

                      <Header as='h6' style={{
                        color: 'grey',
                        textAlign: 'left'

                      }}> {node.birth}<br/>{node.death}</Header>
                    </Item.Description>
                    <Item.Extra>
                        <Header as='h6' textAlign='left'>En esta editorial:</Header>
                        <p style={{textAlign: 'left'}}>
                        <Link to={`/libros/${node.books[0].id}`} >
                        • {node.books[0].title} ({node.books[0].year})
                        </Link>
                        </p>
                    </Item.Extra>
                  </Item.Content>

              </Item>
            </Item.Group>
          </Grid.Column>
        )
      })}
    </Grid>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulAuthor {
      edges {
        node {
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
          books {
            id
            title
            year
          }
        }
      }
    }
  }
`
