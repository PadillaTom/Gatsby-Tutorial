import React from "react"
import Header from "../examples/Header"
import Layout from "../components/Layout"
import HeaderStatic from "../examples/OldWayHeaderStatic"

// Page Query: Importamos graphql
import { graphql } from "gatsby"
//
// Importaremos AUTHOR como Page Query, Only to be used in PAGES, NOT COMPONENTS
// 1) Exportamos la DATA graphql
// 2) Usamos la DATA como PROPS
const examples = ({ data }) => {
  //   console.log(props)
  // 3) Destructure la DATA
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <p>Hello form Examples</p>
      <Header></Header>
      <HeaderStatic></HeaderStatic>
      <h5>Author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`

export default examples
