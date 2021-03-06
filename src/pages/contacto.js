import React from "react"
import { graphql } from "gatsby"
import { Header, Divider, Form, Checkbox, Button, Message  } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Contacto" />
    <Header as="h2" style={{
      textAlign: 'right',
    }}>CONTACTO</Header>
    <Divider />
    <Message
        attached
        header='Gracias por visitarnos!'
        content='Déjanos tu mensaje y te contactaremos a la brevedad'
      />
      <Message
    error
    header='ATENCIÓN'
    list={[
      'Si necesitas uno o más libros, puedes escribirnos el listado.',
      'Próximamente tendremos disponible una plataforma de pedidos.',
    ]}
  />
      <br/>
    <Form action="https://formspree.io/editorialderiva@gmail.com" method="POST">
      <Form.Group widths='equal'>
        <Form.Input required label='Nombre' type='text' name='name' placeholder='Nombre de contacto' />
        <Form.Input required label='Correo' name='_replyto' placeholder='correo@ejemplo.org' />
      </Form.Group>
      <Form.TextArea required label='Mensaje' name='message' placeholder='Déjanos tu mensaje' />
      <Form.Field required>
        <Checkbox label='Soy human@' />
      </Form.Field>
     <Button type='submit' value='send'>Enviar</Button>
   </Form>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulGenre {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
