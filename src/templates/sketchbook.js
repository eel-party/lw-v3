import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Sketchbook({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <h3>This is where the pages (items) need to go</h3>
      <p>Will work similar to pages/library.js </p>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`