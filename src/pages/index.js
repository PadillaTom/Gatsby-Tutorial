import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default () => (
  <div>
    <Navbar></Navbar>
    Hello People!
    <Link to="/blog/">blog</Link>
  </div>
)
