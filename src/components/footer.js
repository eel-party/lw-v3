// import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, Divider } from 'theme-ui'

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
    <Divider />
      <p>All content <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1">CC BY-NC-SA 4.0</a> 2020 <Link to={`/`}>{data.site.siteMetadata.title}</Link>, unless otherwise stated.
      </p>
    </div>
  )
}

