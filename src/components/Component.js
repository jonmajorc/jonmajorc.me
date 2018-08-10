import React from 'React'

export default class Component extends React.Component {
  state = {
    isMobile: false,
  }

  componentDidMount() {
    window.addEventListener('resize', this.isMobileDevice)
  }

  isMobileDevice = e => {
    console.dir(document)
    return (
      typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1
    )
  }
}
