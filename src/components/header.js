import React from "react"
import { Link } from "gatsby"
import { Header, Menu } from "semantic-ui-react"

export default ({ siteTitle }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      // position: `fixed`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Header as="h1">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Header>
      <Menu text>
        <Menu.Item>
          <Link
            to="/autores"
            style={{
              textDecoration: `none`,
            }}
          >
            Autores
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="/colecciones"
            style={{
              textDecoration: `none`,
            }}
          >
            Colecciones
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="/generos"
            style={{
              textDecoration: `none`,
            }}
          >
            Géneros
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="/libros"
            style={{
              textDecoration: `none`,
              cursor: `pointer !important`,
            }}
          >
            Libros
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  </header>
)
