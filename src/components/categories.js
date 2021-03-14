/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import React from 'react'
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const CATEGORIES = [
  'All',
  'Coding',
  'Internet Videos',
  'Client Projects',
  'Photography',
  'Affiliate Links',
  'About me',
]

const DUMMY_DATA = [
  {
    id: 0,
    img: null,
    title: 'title 1',
    url: '/jonmajorc',
    tag: 'coding',
  },
  {
    id: 1,
    img: null,
    title: 'title 2',
    url: '/jonmajorc',
    tag: 'coding',
  },
  {
    id: 2,
    img: null,
    title: 'title 3',
    url: '/jonmajorc',
    tag: 'internet videos',
  },
  {
    id: 3,
    img: null,
    title: 'title 4',
    url: '/jonmajorc',
    tag: 'internet videos',
  },
]

const Categories = ({ className, ...props }) => {
  let { blogs } = useStaticQuery(graphql`
    query blogs {
      blogs: allMdx(
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
              banner {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `)

  console.log(blogs)

  let [selCategory, setSelCategory] = React.useState(CATEGORIES[0])

  let toTag = (tag) => tag.split('_').join(' ').toLowerCase()

  let categoryContent = React.useMemo(
    () =>
      DUMMY_DATA.filter(({ node }) =>
        selCategory.toLowerCase() === 'all'
          ? node
          : toTag(node.tag) === selCategory.toLowerCase()
      ),
    [selCategory]
  )

  return (
    <div sx={sx.container} className={className}>
      <div sx={sx.categoryTitles}>
        {CATEGORIES.map((category) => {
          return (
            <span
              key={category}
              sx={sx.category}
              data-selected={category === selCategory}
              className={category === selCategory && 'red-stroke-bold'}
              onClick={() => setSelCategory(category)}
              data-text={category}
            >
              {category}
            </span>
          )
        })}
      </div>
      <div sx={sx.content}>
        {categoryContent.map(({ node: blog }) => {
          return <CategoryCard key={blog.id} {...blog} tag={toTag(blog.tag)} />
        })}
      </div>
    </div>
  )
}

const CategoryCard = ({ banner, title, tag }) => {
  return (
    <div sx={sx.categoryCard}>
      <Img sx={sx.categoryCard.img} fluid={banner.childImageSharp.fluid}></Img>
      <p sx={sx.categoryCard.title}>{title}</p>
      <p sx={sx.categoryCard.url}>test url</p>
      <span sx={sx.categoryCard.tag}>{tag}</span>
    </div>
  )
}

let sx = {
  container: {
    maxWidth: 1024,
    margin: '0 auto',
    marginTop: [50, 120],
  },
  categoryTitles: {
    display: 'flex',
    whiteSpace: 'nowrap',
    overflowY: 'auto',
    padding: '20px 0',
  },
  category: {
    marginRight: 40,
    cursor: 'pointer',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    '&[data-selected=true]': {
      textDecoration: 'line-through',
      textDecorationThickness: '3px',
      color: 'darkRed',
    },
  },
  content: {
    marginTop: 86,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 314px)',
    gridGap: '10px',
  },
  categoryCardContainer: {
    maxWidth: 326,
    height: 'auto',
  },
  categoryCard: {
    borderRadius: 8,
    backgroundColor: 'w',
    maxWidth: 314,
    height: 'auto',
    padding: 9,
    transition: 'zoom',
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: 'shadowHover',
    },

    img: {
      borderRadius: 4,
      width: 296,
      height: 198,
      backgroundColor: 'beige',
    },

    title: {
      fontWeight: 'bold',
    },

    url: {
      fontWeight: 'bold',
      fontSize: '14px',
    },

    tag: {
      backgroundColor: 'beige',
      fontSize: '14px',
      padding: '4px 8px',
      borderRadius: 50,
    },
  },
}

export { Categories }
