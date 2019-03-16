import React, { Component } from "react"
import { graphql } from "gatsby"

class BookTemplate extends Component {
  render() {
    const book = this.props.data.contentfulBook
    return (
      <div>
        <h1>{book.title}</h1>
      </div>
    )
  }
}

export default BookTemplate

export const pageQuery = graphql`
  query bookQuery($id: String!) {
    contentfulBook(id: { eq: $id }) {
      id
      title
    }
  }
`
