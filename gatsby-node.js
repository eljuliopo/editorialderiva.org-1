/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const bookTemplate = path.resolve(`src/templates/book.js`)
  const authorTemplate = path.resolve(`src/templates/author.js`)
  const collectionTemplate = path.resolve(`src/templates/collection.js`)
  const genreTemplate = path.resolve(`src/templates/genre.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  return graphql(`
    {
      allContentfulBook(limit: 1000) {
        edges {
          node {
            id
            title
          }
        }
      }
      allContentfulAuthor {
        edges {
          node {
            id
            name
          }
        }
      }
      allContentfulCollection {
        edges {
          node {
            id
            name
          }
        }
      }
      allContentfulGenre {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create book pages.
    result.data.allContentfulBook.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `libros/${edge.node.id}`,
        component: bookTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
          id: edge.node.id,
        },
      })
    })
    result.data.allContentfulAuthor.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `autores/${edge.node.id}`,
        component: authorTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
          id: edge.node.id,
        },
      })
    })
    result.data.allContentfulCollection.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `colecciones/${edge.node.id}`,
        component: collectionTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
          id: edge.node.id,
        },
      })
    })
    result.data.allContentfulGenre.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `generos/${edge.node.id}`,
        component: genreTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
          id: edge.node.id,
        },
      })
    })
  })
}
