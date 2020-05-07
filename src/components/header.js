import React from "react"
import { Link } from "gatsby"
import { Menu, Image, Container, Dropdown } from "semantic-ui-react"
import Logo from "../images/Logo.svg"


export default ({ siteTitle }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      marginBottom: `6rem`,
      // position: `fixed`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0rem 1.0875rem`,
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

                    Colecciones

              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to='/autores' >

                    Por autores
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to='/generos'>
                    Por géneros
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to='/libros' >
                    Todos los libros
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
