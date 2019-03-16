import React, { Component } from "react"
import { graphql } from "gatsby"

class CollectionTemplate extends Component {
  render() {
    const collection = this.props.data.contentfulCollection
    return (
      <div>
        <h1>{collection.name}</h1>
      </div>
    )
  }
}

export default CollectionTemplate

export const pageQuery = graphql`
  query collectionQuery($id: String!) {
    contentfulCollection(id: { eq: $id }) {
      id
      name
    }
  }
`
