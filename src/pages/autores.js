import React from "react"
import { graphql } from "gatsby"
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
    <Grid columns={3}>
      {data.allContentfulAuthor.edges.map(({ node, id }) => {
        return (
          <Grid.Column key={node.id} divided='vertically' mobile={16} tablet={8} computer={5}>
            <Item.Group relaxed unstackable>
              <Item>
                <Item.Image
                  fluid
                  centered
                  circular
                  size='tiny'
                  src={node.image.resize.src}
                  alt={node.id}
                  as='a'
                  href={`/autores/${node.id}`}  />


                  <Item.Content verticalAlign='middle'>
                    <Item.Header as='a' href={`/autores/${node.id}`} >
                      <Header as='h6' style={{
                        textTransform: 'uppercase'
                      }}>{node.name}</Header>
                    </Item.Header>

                    <Item.Description><Header as='h6'><Flag name={node.country} /> {node.birth}<br/>{node.death}</Header></Item.Description>
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
            resize(width: 200) {
              src
            }
          }
          country
          birth
          death
        }
      }
    }
  }
`
