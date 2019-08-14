import React from "react"
import { Link } from "gatsby"
import { Header, Container, Grid, Icon } from "semantic-ui-react"
import sea from "../images/sea.gif"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default ({ siteTitle }) => (
  <div
    style={{
      marginTop: `1rem`,
      width: '100%',
      height: '100vh',
      backgroundBlendMode: 'difference',
      backgroundImage: `url(${sea})`,
      backgroundColor: 'white',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      boxSizing: 'content-box',
      position: 'relative',

    }}
  >
    <Grid stackable columns='equal' verticalAlign='bottom' style={{
      textAlign: 'justify',
      marginTop: '2em'
    }}>
      <Grid.Column width={5}>
      </Grid.Column>
      <Grid.Column width={6} style={{
        marginTop: '15em'
      }}>
          <Header as="h2"  textAlign='right'>
          "Ante la propiedad intelectual, promovemos intelecto contra la propiedad"
          </Header>
          <Header as="h4" textAlign='right' style={{
            fontStyle: 'italic',
          }}>Editorial Deriva</Header>

      </Grid.Column>
      <Grid.Column width={5}>
      </Grid.Column>
    </Grid>
    <Container text textAlign='center' attached="bottom" fluid style={{
      marginTop: '10em'
    }}>
      <Link to="#inicio">
        <Icon name='angle down' color='black' size='big' />
      </Link>
    </Container>
  </div>
)
