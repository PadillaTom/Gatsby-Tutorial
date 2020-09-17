import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ComponentName = ({ data }) => {
  // 1) Destructuramos el Query, para llegar a nodes.
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log(products) // Vemos el Array que contiene los 3 productos.
  // Podemos MAP dicha array:
  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title}></Image>
              <h3>
                {product.title} <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>More Details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName

// Para Layout conviene tener un CSS, serán los estilos GLOBALES
// layout.css --> Sería un traditional CSS File, dadndo classes para cada elemento.
// De todas formas lo mejor es CSS MODULES!!!
// CSS MODULES:
// blog.module.css
