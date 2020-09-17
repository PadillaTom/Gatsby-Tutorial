import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// Basic React: using img + source attribute
import img from "../images/choclo4.jpg"
// Gatsby:
import Image from "gatsby-image"

// Query Variable: DEBEMOS REEMPLAZAR SOURCE por el FRAGMENT SACADO DE DOCS PLUGINS
const getImages = graphql`
  {
    fixedimg: file(relativePath: { eq: "arquitectura1.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluidimg: file(relativePath: { eq: "choclo4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
//
const Images = () => {
  // Pass the IMAGES variable inside the HOOK:
  const data = useStaticQuery(getImages)
  // console.log(data) // Vemos el object que contiene las imagenes.
  //
  // Return: Aqui es donde usamos el Gatsby Fragment (Lo sacamos de PLUGIN DOC)
  // Fixed --->    ...GatsbyImageSharpFixed
  // Fluid --->    ...GatsbyImageSharpFluid_withWebp_tracedSVG
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image like React</h3>
        <img src={img} width="100%" alt="name" />
      </article>
      <article className="single-image">
        <h3>Fixed Image with Blur</h3>
        <Image fixed={data.fixedimg.childImageSharp.fixed}></Image>
      </article>
      <article className="single-image">
        <h3>Fluid Image and SVG</h3>
        <Image fluid={data.fluidimg.childImageSharp.fluid}></Image>
      </article>
    </section>
  )
}

export default Images
