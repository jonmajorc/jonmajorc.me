/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'

/***************************************************************************\
  components 
\***************************************************************************/
import { Divider } from 'components/divider'
import { PageHeader } from 'components/page-header'
import SEO from 'components/seo'
import { CollaborateCTA } from 'components/collaborate-cta'
import { FavCard } from 'components/fav-card'
import { InstagramCard } from 'components/instagram-card'
import Layout from 'components/main-layout'

/***************************************************************************\
  Assets
\***************************************************************************/
import Photographer from 'images/photographer.inline.svg'
import Code from 'images/code.inline.svg'
import Cinematographer from 'images/cinematographer.inline.svg'
import Mercedes from 'images/mercedes.png'
import MelSuge from 'images/mel-suge.png'
import Walking from 'images/walking.png'

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
            Hello, my name is Jon Major Condon! I am a software developer @
            fm.co, working on Musicbed and Filmsupply. I also love doing other
            creative things outside of software, such as filmmaking and
            photography. It's kinda funny, I bought a camera in the 2019 for the
            intentions to start making coding content... BUT, I got distracted
            trying to figure out how to work the camera and became interested in
            something photography and filmmaking. I guess you'll see a hybrid of
            filmmaking, photorgraphy, and software development from me!
          </Styled.p>
        }
        image={{ src: data.banner.childImageSharp.fluid }}
        alt={author.name}
      />
      <Divider sx={sx.divider} />
      <Styled.h4 className="bold" sx={{ marginTop: 191, textAlign: 'center' }}>
        // what I love to do
      </Styled.h4>
      <div sx={sx.favCards}>
        <FavCard
          icon={<Cinematographer />}
          title="Filmmaking"
          years="1"
          text="vlogs, cinematic b roll, and I would love to do some extend films."
        />
        <FavCard
          isHighlighted
          icon={<Code />}
          title="Code"
          years="8"
          text="3 years consulting, 1 year corporate, 1 year startup. Currently @ fm.co "
        />
        <FavCard
          icon={<Photographer />}
          title="Photographer"
          years="1"
          text="So far I've done portraits, products, desk setup, and businesses shots."
        />
      </div>
      <CollaborateCTA sx={sx.letsCollaborate} />
      {/* <div sx={sx.instagramCards}>
        <InstagramCard
          sx={sx.instagramCardFirst}
          title="// Desk setup and BTS goodies"
          images={[
            { img: MelSuge, alt: 'mel and suge' },
            { img: Walking, alt: 'walking on the pier' },
            { img: Mercedes, alt: 'White Mercedes CLS 550' },
          ]}
          link="/jonmajorc"
        />
        <InstagramCard
          sx={sx.instagramCardLast}
          title="// Dope stills and movers"
          images={[
            { img: MelSuge, alt: 'mel and suge' },
            { img: Walking, alt: 'walking on the pier' },
            { img: Mercedes, alt: 'White Mercedes CLS 550' },
          ]}
          link="/jonmajorcmedia"
        />
      </div> */}
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
  letsCollaborate: {
    margin: '0 auto',
    marginTop: 72,
  },
  favCards: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: [500, 500, 1024],
    margin: '0 auto',
    marginTop: 67,
  },
  instagramCards: {
    maxWidth: 1024,
    margin: '0 auto',
    marginTop: 90,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

    ['@media (max-width: 1095px)']: {
      justifyContent: 'center',
    },
  },
  instagramCardFirst: {
    marginTop: 10,
  },
  instagramCardLast: {
    marginTop: 10,
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
