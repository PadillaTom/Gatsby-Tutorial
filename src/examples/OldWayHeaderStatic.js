// This is the old way of setting up, before Static Query HOOK

import React from "react"
import { StaticQuery, graphql } from "gatsby"
//
// Vemos que teniamos el Component, dentro 2 props: Query // Render (dentro una function)
// Query ---> Contiene la Query normalmente
// Render --> Pasamos la Query como Parameter => <h1> drill of the data <h1>
const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
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
    `}
    render={data => <h4>{data.site.info.description}</h4>}
  ></StaticQuery>
)

export default ComponentName
