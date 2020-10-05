/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Fragment } from 'react'
import { Nav } from '../components/nav'
import { Footer } from '../components/footer'
import { PageHeader } from '../components/page-header'
import { Divider } from '../components/divider'

import '../styles.css'

const Layout = ({ location, children, ...props }) => {
  return (
    <Fragment>
      <Nav location={location} />
      <main
        sx={{
          width: '100%',
          margin: '0 auto',
          marginTop: 144,
        }}
      >
        <PageHeader
          sx={sx.pageHeader}
          header={<Styled.h1>&#47;&#47; Uses</Styled.h1>}
          text={
            <Styled.p>
              Nam eu mollis sem. Nullam eleifend nulla molestie mauris aliquam
              tincidunt. Praesent ex tortor, mollis eu enim in, elementum
              pulvinar leo. Suspendisse sit amet neque libero. Mauris sit amet
              ligula vitae sem molestie tempor id eget nisi. Nam dignissim
              malesuada est eget commodo. Nulla feugiat massa sed pellentesque
              pretium. Nullam eleifend tortor elit, in rhoncus nisl dictum a.
              Integer sed tempor massa. Suspendisse ligula elit, mattis at
              condimentum vitae, ornare auctor neque. Nulla facilisi.
              Pellentesque non ante eget odio malesuada scelerisque.
            </Styled.p>
          }
          image={{
            src: props.data.banner.childImageSharp.fluid,
            className: 'mdx-layout-image',
          }}
          alt={null}
        />
        <Divider sx={sx.divider} />
        <div sx={sx.content}>{children}</div>
      </main>
      <Footer placeBottom={props.placeFooterBottom} />
    </Fragment>
  )
}

let sx = {
  pageHeader: {
    marginTop: 144,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',

    '.mdx-layout-image': {
      height: 240,
      width: 240,
    },
  },
  divider: {
    margin: '72px 0',
  },
  content: {
    width: [1024],
    margin: '0 auto',
  },
}

export default Layout
