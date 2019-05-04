import React from 'react'
import Box from './Box'
import Blurb from './Blurb'
import Image from './Image'
import user from '../../static/user-solid.svg'
import globe from '../../static/globe-solid.svg'
import briefcase from '../../static/briefcase-solid.svg'
import { useStaticQuery, graphql } from 'gatsby'

const Bio = () => {
  const imageSrc = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jonmajor.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Box subHeader="Hey, I'm Jon Major!" className="Bio">
      <div className="Bio__content">
        <div className="Bio__content__left">
          <Blurb className="Bio__Blurb">
            Software is my strength and I dabble in design. I am a Software
            Farmer at{' '}
            <a href="https://bendyworks.com/" className="bendyworks">
              Bendyworks
            </a>{' '}
            that tends to client farms (code-bases). As a farmer of software, I
            focus on really anything web related...
          </Blurb>
          <ul className="Bio__info">
            <li>
              <img src={user} alt="user icon"/>
              <span>Senior Sofware Dev</span>
            </li>
            <li>
              <img src={briefcase} alt="briefcase icon"/>
              <span>
                <a href="https://bendyworks.com/" className="bendyworks">
                  @Bendyworks
                </a>
              </span>
            </li>
            <li>
              <img src={globe} alt="globe icon"/>
              <span>Madison, WI</span>
            </li>
          </ul>
        </div>
        <Image
          rotate="25deg"
          className="Image--w-350 Bio__Image"
          fluidSrc={imageSrc.placeholderImage.childImageSharp.fluid}
          alt="Major hard at work"
        />
      </div>
    </Box>
  )
}

export default Bio
