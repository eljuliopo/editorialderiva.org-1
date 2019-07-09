import React from "react"
import { Header } from "semantic-ui-react"

export default ({ siteTitle }) => (
  <footer
    style={{
      marginTop: `3.2rem`,
    }}
  >
  <Header as='h6' style={{
    textTransform: 'uppercase',
    textAlign: 'center'
  }}>
    EDITORIAL DERIVA © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </Header>
  </footer>
)
