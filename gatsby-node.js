/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query AllPagesJson {
      allPagesJson {
        nodes {
          id
          path
          title
          template
          context {
            description
            components {
              type
            }
          }
        }
      }
    }
  `);

  queryResults.data.allPagesJson.nodes.forEach(node => {
    createPage({
      path: node.path,
      component: path.resolve(`src/templates/${node.template}.js`),
      context: node.context,
    });
  });
}