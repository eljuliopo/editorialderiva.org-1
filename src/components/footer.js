import React from "react"
import { Header, Image, Divider } from "semantic-ui-react"
import boat from "../images/boat.png"

export default ({ siteTitle }) => (
  <footer
    style={{
      marginTop: `3.2rem`,
    }}
  >
  <Divider />
  <Header as='h6' verticalAlign="botttom" style={{
    textAlign: 'center',
    fontWeight: 'bold'
  }}>
  <Image src={boat} size="tiny" />
  <br/> Editorial DERIVA / {new Date().getFullYear()}<br/> Build with
    {` `}
    <a href="https://www.gatsbyjs.org" target='_blank' rel="noopener noreferrer" >Gatsby</a>
  </Header>
  </footer>
)
