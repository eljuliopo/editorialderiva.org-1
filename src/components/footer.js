import React from "react"
import { Header, Image, Divider } from "semantic-ui-react"
import boat from "../images/boat.png"

export default ({ siteTitle }) => (
  <footer
    style={{
      marginTop: `3.2rem`,
    }}
  >
  <Header as='h6' verticalAlign="botttom" style={{
    textTransform: 'uppercase',
    textAlign: 'center',

  }}>
  <Divider />
  <Image src={boat} verticalAlign='bottom' size="small" /> <br/> EDITORIAL DERIVA © {new Date().getFullYear()}, Desarrollado con
    {` `}
    <a href="https://www.gatsbyjs.org" target='_blank' rel="noopener noreferrer" >Gatsby</a>
  </Header>
  </footer>
)
