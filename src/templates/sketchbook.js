import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Sketchbook({ data }) {
  const post = data.mdx
  return (
    <Layout>
      <div>
        <p>this page is using the sketcbook.js template</p>
        <h1>{post.frontmatter.title}</h1>
        <h3>category: {post.frontmatter.category}</h3>
        {/*<div dangerouslySetInnerHTML={{ __html: post.body }} />*/}
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        category
      }
    }
  }
`