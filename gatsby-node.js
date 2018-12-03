const path = require('path')

exports.createPages = ({ grapql, actions: { createPage } }) => {
  createPage({
    path: '/somefakepage',
    component: path.resolve('./src/components/PostLayout.js'),
  })
}
