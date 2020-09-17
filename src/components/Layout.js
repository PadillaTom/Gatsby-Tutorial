import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../components/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default Layout
