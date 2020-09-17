//::::::::::::::::::::::::::USE OF STATIC QUERY HOOK::::::::::::::::::::
// PRIMERA MANERA: "CODE EXPORTER"
// Vemos que importa un objeto: DATA y lo tenemos que DRILL
// hasta obtener la data deseada,
// Vemos también que exporta un JSON, entonces el primer display es un JSON
//  "return <pre>{JSON.stringify(data, null, 4)}</pre>"
// Cambiamos ese Return por uno propio
// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// ​
// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//           description
//           author
//           data
//           person {
//             name
//             age
//           }
//         }
//       }
//     }
//   `)
//   return <pre>{JSON.stringify(data, null, 4)}</pre>
// }
// ​
// export default ComponentName
//
// SEGUNDA MANERA: "HAND WRITTEN GRAPHQL AND HOOK."
// Just copy the code made by the Explorer
// John likes to use a Variable outside the Function to place the code, then import
// such variable into the function. GetData
// Hook: UseStaticQuery, Function: Graphql from gatsby
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
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

const Header = () => {
  // ---> Variable:
  //  const data = useStaticQuery(getData)
  //  console.log(data) // Vemos el Object que contiene toda la data.
  // Para usar ver Lineas Comentadas.
  // ---> Destructuring:
  const {
    site: {
      info: {
        // Alias de SiteMetadata
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* <h1>Title: {data.site.siteMetadata.title} </h1>
      <h1>Name: {data.site.siteMetadata.person.name} </h1> */}
      <h1>Title: {title} </h1>
      <h1>Name: {name} </h1>
    </div>
  )
}

export default Header
// MEJOR OPCION:

// Alojar la Query en una Variable (getData)
// Luego pasarla en el useStaticQuery(getData) YA DESTRUCTURADA!!!!
// O sino drill the query
//
//
// ALIAS!
// Por ejemplo para siteMetadata ponemos el "NAME: siteMetadata "
// Una vez hecho esto podemos utilizar el NAME dado, en vez de escribir siteMetadata
// "Info: {}"
//
// QUERY NAME!
// We can add a name to our Query.
// query NAME { site, etc...}
// "query FirstQuery {}"
//
// THE OLD WAY OF SETTING EVERYTHING UP IS --> STATIC QUERY (NO HOOK) <----
// Haremos un new file: OldWayHeaderStatic.js
