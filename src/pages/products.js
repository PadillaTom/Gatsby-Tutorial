import React from "react"
import Layout from "../components/Layout"
// Module CSS: Se usa como ClassName={styles.CLASS}
import styles from "../components/products.module.css"

export default function products() {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>Our Products Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic.
        </p>
      </div>
    </Layout>
  )
}

// Para Layout conviene tener un CSS, serán los estilos GLOBALES
// layout.css --> Sería un traditional CSS File, dadndo classes para cada elemento.
// De todas formas lo mejor es CSS MODULES!!!
// CSS MODULES:
// blog.module.css
