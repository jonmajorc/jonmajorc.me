import React from 'react'
import determinedImage from '../assets/determined.png'
import reallyExpImage from '../assets/love.png'
import expImage from '../assets/enjoy.png'

// components
import Section from './Section'

class Skills extends React.Component {
  render() {
    return (
      <Section
        className="skills"
        id="skills"
        section="skills"
        opening="["
        closing="]"
      >
        <header className="skills__header">
          <ul className="skills__legend">
            <li className="skills__legend__item">
              <img src={reallyExpImage} alt="love emoji" />
              <small>Really Exp.</small>
            </li>
            <li className="skills__legend__item">
              <img src={expImage} alt="enjoy emoji" />
              <small>Exp.</small>
            </li>
            <li className="skills__legend__item">
              <img src={determinedImage} alt="determined emoji" />
              <small>Learning</small>
            </li>
          </ul>
        </header>
        <ul className="skill__list">
          <li className="skill__item">
            HTML + JavaScript + CSS{' '}
            <img src={reallyExpImage} alt="love emoji" />
          </li>
          <li className="skill__item">
            angular 1.x <img src={expImage} alt="enjoy emoji" />
          </li>
          <li className="skill__item">
            Angular <img src={expImage} alt="enjoy emoji" />
          </li>
          <li className="skill__item">
            React <img src={reallyExpImage} alt="love emoji" />
          </li>
          <li className="skill__item">
            React Native <img src={determinedImage} alt="determined emoji" />
          </li>
          <li className="skill__item">
            Ionic <img src={expImage} alt="enjoy emoji" />
          </li>
          <li className="skill__item">
            Redux <img src={reallyExpImage} alt="love emoji" />
          </li>
          <li className="skill__item">
            Webpack <img src={reallyExpImage} alt="love emoji" />
          </li>
          <li className="skill__item">
            Vue <img src={expImage} alt="love emoji" />
          </li>
          <li className="skill__item">
            Python <img src={reallyExpImage} alt="love emoji" />
          </li>
          <li className="skill__item">
            Ruby <img src={determinedImage} alt="determined emoji" />
          </li>
        </ul>
      </Section>
    )
  }
}

export default Skills
