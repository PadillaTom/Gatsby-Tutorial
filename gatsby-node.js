// ::::::::: Gatsby Node :::::::::::::
// Here we will create Pages Dynamically.
//
// NODE MODULES
// *1* ---> Creamos un PATH que luego indicará donde
//          se encuentra el File para crear los Templates.
const path = require("path")

//
// We create an AsyncAwait Function htat will automatically return a Promise.
// This function will have a Graphql Function and an Actions Objects
exports.createPages = async ({ graphql, actions }) => {
  // Destructuramos el Object: Actions -->
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)
  // Al tratarse de un Array: Podemos iterar FOREACH
  result.data.products.nodes.forEach(product => {
    //Create Page for each Product
    createPage({
      //Path: Indica el path donde irá la nueva Page.
      path: `/products/${product.slug}`,
      // Component: es un NODE MODULE --> Ver Arriba *1*
      component: path.resolve(`src/templates/product-template.js`),
      // Context: "variable" a la cual se le tomarán la data para crear el Template.
      context: {
        slug: product.slug,
      },
    })
  })
}
