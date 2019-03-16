import React, { Component } from "react"
import { graphql } from "gatsby"

class AuthorTemplate extends Component {
  render() {
    const author = this.props.data.contentfulAuthor
    return (
      <div>
        <h1>{author.name}</h1>
      </div>
    )
  }
}

export default AuthorTemplate

export const pageQuery = graphql`
  query authorQuery($id: String!) {
    contentfulAuthor(id: { eq: $id }) {
      id
      name
    }
  }
`
