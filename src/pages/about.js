/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'

/***************************************************************************\
  components 
\***************************************************************************/
import { Divider } from '../components/divider'
import SEO from '../components/seo'
import Layout from '../components/main-layout'

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <Divider />
    </Layout>
  )
}

let sx = {
  container: {},
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
