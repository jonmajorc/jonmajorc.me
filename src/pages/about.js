/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'

/***************************************************************************\
  components 
\***************************************************************************/
import { Divider } from '../components/divider'
import { PageHeader } from '../components/page-header'
import SEO from '../components/seo'
import { CollaborateCTA } from '../components/collaborate-cta'
import { FavCard } from '../components/fav-card'
import { InstagramCard } from '../components/instagram-card'
import Layout from '../components/main-layout'

/***************************************************************************\
  Assets
\***************************************************************************/
import Photographer from '../images/photographer.inline.svg'
import Code from '../images/code.inline.svg'
import Cinematographer from '../images/Cinematographer.inline.svg'
import Mercedes from '../images/mercedes.png'
import MelSuge from '../images/mel-suge.png'
import Walking from '../images/walking.png'

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { author } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <PageHeader
        sx={sx.pageHeader}
        header={<Styled.h1>&#47;&#47; About</Styled.h1>}
        text={
          <Styled.p>
            Nam eu mollis sem. Nullam eleifend nulla molestie mauris aliquam
            tincidunt. Praesent ex tortor, mollis eu enim in, elementum pulvinar
            leo. Suspendisse sit amet neque libero. Mauris sit amet ligula vitae
            sem molestie tempor id eget nisi. Nam dignissim malesuada est eget
            commodo. Nulla feugiat massa sed pellentesque pretium. Nullam
            eleifend tortor elit, in rhoncus nisl dictum a. Integer sed tempor
            massa. Suspendisse ligula elit, mattis at condimentum vitae, ornare
            auctor neque. Nulla facilisi. Pellentesque non ante eget odio
            malesuada scelerisque.
          </Styled.p>
        }
        image={{ src: data.banner.childImageSharp.fluid }}
        alt={author.name}
      />
      <Divider sx={sx.divider} />
      <Styled.h4 className="bold" sx={{ marginTop: 91, textAlign: 'center' }}>
        // what I love to do
      </Styled.h4>
      <div sx={sx.favCards}>
        <FavCard
          icon={<Cinematographer />}
          title="Filmmaking"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem massa,."
        />
        <FavCard
          isHighlighted
          icon={<Code />}
          title="Code"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem massa,."
        />
        <FavCard
          icon={<Photographer />}
          title="Photographer"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem massa,."
        />
      </div>
      <CollaborateCTA sx={{ width: 1048, margin: '0 auto', marginTop: 72 }} />
      <div sx={sx.instagramCards}>
        <InstagramCard
          title="// Desk setup and BTS goodies"
          images={[
            { img: MelSuge, alt: 'mel and suge' },
            { img: Walking, alt: 'walking on the pier' },
            { img: Mercedes, alt: 'White Mercedes CLS 550' },
          ]}
          link="/jonmajorc"
        />
        <InstagramCard
          sx={{ marginLeft: 16 }}
          title="// Dope stills and movers"
          images={[
            { img: MelSuge, alt: 'mel and suge' },
            { img: Walking, alt: 'walking on the pier' },
            { img: Mercedes, alt: 'White Mercedes CLS 550' },
          ]}
          link="/jonmajorcmedia"
        />
      </div>
    </Layout>
  )
}

let sx = {
  pageHeader: {
    marginTop: 144,
    margin: '0 auto',
  },
  divider: {
    marginTop: 72,
  },
  favCards: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 67,
  },
  instagramCards: {
    marginTop: 90,
    display: 'flex',
    justifyContent: 'center',
  },
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    banner: file(absolutePath: { regex: "/jonmajorc.png/" }) {
      childImageSharp {
        fluid(maxWidth: 341, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
