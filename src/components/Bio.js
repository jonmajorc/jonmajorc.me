import React from 'react'
import Box from './Box'
import Blurb from './Blurb'
import Image from './Image'
import user from '../../static/user-solid.svg'
import globe from '../../static/globe-solid.svg'
import briefcase from '../../static/briefcase-solid.svg'

const Bio = () => {
  return (
    <div className="Bio">
      <Box subHeader="Hey, I'm Jon Major!">
        <div className="Bio__content">
          <div className="Bio__content__left">
            <Blurb className="Bio__Blurb">
              Software is my strength and I dabble in design. I am a Software
              Farmer that tends to client farms (code-bases){' '}
              <a href="https://bendyworks.com/" className="bendyworks">
                @Bendyworks
              </a>
              . As a farmer of software, I focus on really anything web
              related...
            </Blurb>
            <ul className="Bio__info">
              <li>
                <img src={user} />
                Senior Sofware Dev
              </li>
              <li>
                <img src={globe} />
                Bendyworks
              </li>
              <li>
                <img src={briefcase} />
                Madison, WI
              </li>
            </ul>
          </div>
          <Image
            rotate="25deg"
            className="Image--w-350 Bio__Image"
            src="./jonmajor.JPG"
            alt="Major hard at work"
          />
        </div>
      </Box>
    </div>
  )
}

export default Bio
