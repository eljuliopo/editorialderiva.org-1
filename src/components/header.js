import React from "react"
import { Link } from "gatsby"
import { Header, Menu, Image, Container, Dropdown } from "semantic-ui-react"
import Logo from "../images/Logo.svg"


export default ({ siteTitle }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      marginBottom: `3.45rem`,
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
      <Menu
        size='small'
        fixed='top'
        borderless
        >
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            cursor: `pointer !important`,
          }}
        >
          <Image size='small' src={ Logo } floated="right" style={{
            padding: `0.5em 0.5em`,
            marginRight: `0em`,

          }}/>
        </Link>
        <Container>

          <Dropdown item text='Catálogo'>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to='/colecciones'>
                  <Header as='h5'>
                    Colecciones
                  </Header>
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to='/autores' >
                  <Header as='h5'>
                    Por autores
                  </Header>
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to='/generos'>
                  <Header as='h5'>
                    Por géneros
                  </Header>
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to='/libros' >
                  <Header as='h5'>
                    Todos los libros
                  </Header>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item
            name='contacto'
            as={Link}
            to='/contacto'
            content='Contacto'
          />



            </Container>



      </Menu>
    </div>
  </header>
)
