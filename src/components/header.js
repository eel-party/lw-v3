// import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

// will need to use this for links/nav: https://theme-ui.com/recipes/gatsby-link

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <Link to={`/`}>
          <h3>
            {data.site.siteMetadata.title}
          </h3>
      </Link>
      <Flex as='nav'>
        <Link to={`/about/`} sx={{pr: 2}}>
          About
        </Link>
        <Link to={`/library/`} sx={{pr: 2}}>
          Library
        </Link>
        <Link to={`/contact/`}>
          Contact
        </Link>
      </Flex>
    </div>
  )
}