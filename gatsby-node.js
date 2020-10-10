const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query {
        blogs: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        mdxPages: allMdx {
          edges {
            node {
              slug
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }
  // Create blog posts pages.
  const posts = result.data.blogs.edges
  const allMdx = result.data.mdxPages.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  allMdx.forEach((post, index) => {
    if (post.node.slug === 'links') {
      return createPage({
        path: post.node.slug,
        component: path.resolve(`./src/templates/links.js`),
        context: {
          slug: post.node.slug,
        },
      })
    }

    createPage({
      path: post.node.slug,
      component: path.resolve(`./src/templates/md-layout.js`),
      context: {
        slug: post.node.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

  if (node.internal.type === `Mdx`) {
    let slug = createFilePath({ node, getNode, basePath: `pages` })

    // const value = createFilePath({ node, getNode })
    createNodeField({
      name: `banner`,
      node,
      value: node.frontmatter.banner,
    })

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })
  }
}
