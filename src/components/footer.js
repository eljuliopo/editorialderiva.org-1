import React from "react"

export default ({ siteTitle }) => (
  <footer
    style={{
      marginTop: `3.2rem`,
    }}
  >
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)
