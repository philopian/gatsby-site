/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */



const path = require('path');
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators; // gatsby uses redux behinds the scenes
  const postTemplate = path.resolve('src/templates/post.js'); // your template
  const query = `{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }`; // graphql query
  return graphql(query)
    .then(res => {
      if (res.errors) return Promise.reject(res.errors)
      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log(node)
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
        })
      })
    });
}