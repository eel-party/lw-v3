// import React from "react"
// import { graphql, Link } from "gatsby"

// export default function Gallery({ data }) {
//   return (

//       <div>
//         <h3>This is the gallery</h3>
//         <p>gallery.js template</p>
//         <h1>{data.markdownRemark.frontmatter.title}</h1>
//       </div>

//   )
// }

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//         totalCount
//         edges {
//             node {
//                 frontmatter {
//                     title
//                     category
//                 }
//             }
//         }
//     }
//   }
// `