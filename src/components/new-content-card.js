/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'

const NewContentCard = (prop) => {
  const data = useStaticQuery(graphql`
    query NewPost {
      newPost: allMarkdownRemark(
        limit: 1
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
          excerpt(pruneLength: 160)
        }
      }
    }
  `)

  const { frontmatter, excerpt, fields } = data.newPost.nodes[0]
  let { date: publishedDate } = frontmatter
  let expired = addDays(publishedDate, 5).getTime() < new Date().getTime()

  return (
    <div sx={sx} className={prop.className}>
      {!expired && <strong className="new-content">New!!</strong>}

      {expired ? (
        <div className="content content--empty">
          There’s nothing currently featured.
        </div>
      ) : (
        <Link
          className="content"
          to={fields.slug}
          sx={{ variant: 'styles.link' }}
        >
          <h3>{frontmatter.title}</h3>
          <p>{excerpt}</p>
        </Link>
      )}
    </div>
  )
}

let sx = {
  backgroundColor: 'beige',
  border: '2px dashed',
  borderRadius: 4,
  padding: 18,
  maxWidth: 578,
  height: 189,
  position: 'relative',

  '.new-content': {
    position: 'absolute',
    top: -38,
    margin: 0,
    fontSize: 4,
    color: 'redPastel',
    transform: 'rotate(-10deg)',
    textShadow: 'newTextShadow',
    userSelect: 'none',
    fontStyle: 'italic',
    textDecoration: 'underline',
  },

  '.content': {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 18,
    boxShadow: 'newContentBox',

    '&--empty': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '> h3': {
      margin: 0,
    },
  },
}

function addDays(date, days) {
  var result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export { NewContentCard }
