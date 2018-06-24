import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class Section extends React.Component {
  state = {
    list: [],
    offset: 0,
    limit: 10,
  }

  /***************************************************************************\
    public
  \***************************************************************************/
  componentDidMount = () => {
    const {
      data = [],
      limit = this.state.limit,
      offset = this.state.offset,
    } = this.props

    this.setState({
      list: data,
      offset,
      limit,
    })
  }

  render() {
    let { list, offset, limit } = this.state
    let { available = true } = this.props
    let content

    if (!available) {
      content = <p className="coming-soon">(Comming Soon)</p>
    } else if (typeof this.props.children === 'function') {
      content = this.props.children({
        list: list.slice(offset, offset + limit),
      })
    } else {
      content = this.props.children
    }

    const { id, section: sectionName, opening, closing } = this.props

    const sectionClass = cx('section', this.props.className)

    return (
      <section id={id} className={sectionClass}>
        <header className="data variable">
          <span className="data__key" data-opening={opening}>
            {sectionName || 'section'}
          </span>
        </header>
        <div className="section--bg">
          <div className="section__content">{content}</div>
          <span className="section__closing">{closing}</span>
          {opening &&
            closing &&
            limit < list.length && (
              <button className="section__button" onClick={() => {}}>
                more()
              </button>
            )}
        </div>
      </section>
    )
  }
}

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  section: PropTypes.string,
  data: PropTypes.array,
  limit: PropTypes.number,
  available: PropTypes.bool,
  offset: PropTypes.number,
  closing: PropTypes.string,
  opening: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
}

export default Section
