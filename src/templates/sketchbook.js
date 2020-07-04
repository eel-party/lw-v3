import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function Sketchbook({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <p>this page is useing the sketcbook.js template</p>
        <h1>{post.frontmatter.title}</h1>
        <h3>category: {post.frontmatter.category}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>

      <h4>{data.allMarkdownRemark.totalCount} pages</h4>

      { post.frontmatter.category.item ? 'this is an item' : ''}

      {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}
            </h3>
          </Link>
          </div>
      ))}
    </Layout>
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
    totalCount
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