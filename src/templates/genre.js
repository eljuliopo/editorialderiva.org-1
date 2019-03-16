import React, { Component } from "react"
import { graphql } from "gatsby"

class GenreTemplate extends Component {
  render() {
    const genre = this.props.data.contentfulGenre
    return (
      <div>
        <h1>{genre.name}</h1>
      </div>
    )
  }
}

export default GenreTemplate

export const pageQuery = graphql`
  query genreQuery($id: String!) {
    contentfulGenre(id: { eq: $id }) {
      id
      name
    }
  }
`
