// import React from "react"

/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return (
    <div sx={{p: 4}}>
      <Header />
      <small>layout.js layout</small>

      {children}

      <Footer />

    </div>
  )
}