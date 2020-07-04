import React from "react"
import { graphql, Link } from "gatsby"

export default function Gallery({ data }) {
  // const post = data.markdownRemark
  return (

      <div>
      <p>Gallery loaded</p>

      {/*<h4>{data.allMarkdownRemark.totalCount} pages</h4>*/}
      </div>



  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
      }
    }
    allMarkdownRemark(filter:{
    frontmatter:{
      category: {
       in: ["item"]
      }
    }
  })  
  {
      edges {
        node {
          id
          frontmatter {
            title

          }
          fields {
            slug
          }

        }
      }
    }
  }
`