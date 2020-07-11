import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
// import Gallery from "../components/gallery"

export default function Sketchbook({ data }) {
  const post = data.mdx
  return (
    <Layout>
      <div>
        <p>sketcbook.js template</p>
        <h1>{post.frontmatter.title}</h1>
        <h3>category: {post.frontmatter.category}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      {/*<Gallery />  */}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
      }
    }
  }
`