import React from "react"
import { Link } from "gatsby"
<<<<<<< HEAD
import { Header, Menu, Image, Container } from "semantic-ui-react"
import Boat from "../images/boat-iso.png"
import Logo from "../images/Logo.svg"

=======
import { Header, Menu, Image, Icon } from "semantic-ui-react"
import Logo from "../images/Logo.svg"
>>>>>>> origin

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
<<<<<<< HEAD
        <Container>
          <Menu.Item>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
                cursor: `pointer !important`,
              }}
            >
              <Image size='mini' src={ Boat }  />
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
              <Header as='h6' style={{
                textTransform: 'uppercase',
              }}>
              Catálogo
              </Header>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/autores"
              style={{
                textDecoration: `none`,
              }}
            >
              <Header as='h6' style={{
                textTransform: 'uppercase',
              }}>
                Autores
              </Header>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/colecciones"
              style={{
                textDecoration: `none`,
              }}
            >
              <Header as='h6' style={{
                textTransform: 'uppercase',
              }}>
                Colecciones
              </Header>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/generos"
              style={{
                textDecoration: `none`,
              }}
            >
              <Header as='h6' style={{
                textTransform: 'uppercase',
              }}>
                Géneros
              </Header>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/contacto"
              style={{
                textDecoration: `none`,
              }}
            >
              <Header as='h6' style={{
                textTransform: 'uppercase',
              }}>
                Contacto
              </Header>
            </Link>
          </Menu.Item>



            </Container>

            <Image size='small' src={ Logo } floated="right" style={{
              padding: `0em 0.5em`,
              marginRight: `1.45em`

            }}/>

=======
        <Image size='small' src={ Logo } alt='logo deriva' centered />
        </Link>
      </Header>
      <Menu text stackable compact size='small' >
        <Menu.Item>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
              cursor: `pointer !important`,
            }}
          >
            <Header as='h6'>
              <Icon fitted name='home' />
            </Header>
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
            <Header as='h6' style={{
              textTransform: 'uppercase',
            }}>
              Catálogo
            </Header>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="/autores"
            style={{
              textDecoration: `none`,
            }}
          >
            <Header as='h6' style={{
              textTransform: 'uppercase',
            }}>
              Autores
            </Header>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="/colecciones"
            style={{
              textDecoration: `none`,
            }}
          >
            <Header as='h6' style={{
              textTransform: 'uppercase',
            }}>
              Colecciones
            </Header>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="/generos"
            style={{
              textDecoration: `none`,
            }}
          >
            <Header as='h6' style={{
              textTransform: 'uppercase',
            }}>
              Géneros
            </Header>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="/contacto"
            style={{
              textDecoration: `none`,
            }}
          >
            <Header as='h6' style={{
              textTransform: 'uppercase',
            }}>
              Contacto
            </Header>
          </Link>
        </Menu.Item>
>>>>>>> origin
      </Menu>

    </div>
  </header>
)
