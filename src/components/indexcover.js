import React from "react"
import { Link } from "gatsby"
import { Header, Container, Grid, Icon, Divider } from "semantic-ui-react"
import sea from "../images/sea.gif"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default ({ siteTitle }) => (
  <div style={{
    marginTop: `1rem`,
    width: '100%',
    height: '100vh',
    backgroundBlendMode: 'difference',
    backgroundImage: `url(${sea})`,
    backgroundColor: 'rgba(256, 256, 256, 1)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    boxSizing: 'content-box',
    position: 'relative',
    backgroundOpacity: '0.9',
  }}>
    <Grid stackable columns='equal' verticalAlign='bottom' style={{
      textAlign: 'justify',
      marginTop: '2em'
    }}>
      <Grid.Column width={5}>
      </Grid.Column>
      <Grid.Column width={6} style={{
        marginTop: '15em'
      }}>
          <Header as="h3"  textAlign='center' style={{textTransform: 'uppercase', fontWeight: '900', }}>
          <Divider />
          Ante la propiedad intelectual promovemos intelecto contra la propiedad
          <Divider />
          </Header>

      </Grid.Column>
      <Grid.Column width={5}>
      </Grid.Column>
    </Grid>
    <Container text textAlign='center' attached="bottom" fluid style={{
      marginTop: '10em'
    }}>
      <Link to="#inicio">
        <Header as='h3'>editorialderiva.org</Header>
        <Icon name='angle down' color='black' size='big' />
      </Link>
    </Container>

  </div>
)
