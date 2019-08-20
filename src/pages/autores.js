import React from "react"
import { graphql } from "gatsby"
import { Header, Grid, Flag, Item, Divider, Segment, Label, List } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Autores" />
    <Header as="h2" style={{
      textAlign: 'right',
    }}>AUTORES</Header>
    <Divider />
    <Grid columns={2} padded>
      {data.allContentfulAuthor.edges.map(({ node, id }) => {
        return (
          <Grid.Column key={node.id} mobile={16} tablet={8} computer={8}>


          <Segment>
            <Item.Group relaxed unstackable divided>
              <Item>
                <Item.Image
                  left
                  rounded
                  size='small'
                  src={node.image.resize.src}
                  alt={node.id}
                  as='a'
                  href={`/autores/${node.id}`}  />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header as='a' href={`/autores/${node.id}`} >
                      <Header as='h5' style={{
                        textTransform: 'uppercase'
                      }}> {node.name}</Header>
                    </Item.Header>
                    <Item.Description>

                      <Header as='h6' style={{
                        color: 'grey',
                        textAlign: 'left'

                      }}> {node.birth}<br/>{node.death}</Header>
                    </Item.Description>
                    <Divider />
                    <Item.Extra>
                      <List size='tiny' color='black' >
                        <List.Item as='a' href={`/libros/${node.books[0].id}`} style={{
                          textTransform: 'uppercase'
                        }}>
                        ►<b>{node.books[0].title}</b> ({node.books[0].date})
                        </List.Item>

                        </List>

                    </Item.Extra>
                  </Item.Content>

              </Item>
              <Label corner='left' size='large' attached='top left'>
              <Flag name={node.country} />
              </Label>
            </Item.Group>
            </Segment>
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
            date
          }
        }
      }
    }
  }
`
