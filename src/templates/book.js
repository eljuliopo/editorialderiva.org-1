import React from "react"
import { Link, graphql } from "gatsby"
import { Header, Image } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title={data.contentfulBook.title} />
    <Image
      floated="left"
      src={data.contentfulBook.cover.resize.src}
      alt={data.contentfulBook.title}
    />
    <Header as="h1">
      {data.contentfulBook.title}{" "}
      <Header.Subheader>
        <Link to={`/autores/${data.contentfulBook.author[0].id}`}>
          {data.contentfulBook.author[0].name}
        </Link>
      </Header.Subheader>
    </Header>
    <p>
      Pertenece a la colección{" "}
      <Link to={`/colecciones/${data.contentfulBook.collection[0].id}`}>
        {data.contentfulBook.collection[0].name}
      </Link>
    </p>
    <p>
      Género:{" "}
      <Link to={`/generos/${data.contentfulBook.genre[0].id}`}>
        {data.contentfulBook.genre[0].name}
      </Link>
    </p>
  </Layout>
)

export const pageQuery = graphql`
  query bookQuery($id: String!) {
    contentfulBook(id: { eq: $id }) {
      id
      title
      originalTitle
      publisher
      year
      pages
      binding
      price
      link
      author {
        id
        name
      }
      cover {
        resize(width: 200) {
          src
        }
      }
      collection {
        id
        name
      }
      genre {
        id
        name
      }
      abstract {
        content {
          content {
            value
          }
        }
      }
    }
  }
`
