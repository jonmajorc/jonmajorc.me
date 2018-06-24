import React, { Component } from 'react'
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

  renderMore = () => {
    this.setState(({ limit, list, offset }) => {
      if (offset + limit > list.length) {
        return {
          offset: 0,
        }
      }

      if (offset + limit <= list.length) {
        return {
          offset: offset + limit,
        }
      }
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

    const { id, section, opening, closing } = this.props

    return (
      <section id={id} className={cx('section', this.props.className)}>
        <header className="data variable">
          {/* <MeVar className="variable__name" /> */}
          <span className="data__key" data-opening={opening}>
            {this.props.section || 'section'}
          </span>
        </header>
        <div className="section--bg">
          <div className="section__content">{content}</div>
          <span className="section__closing">{closing}</span>
          {opening &&
            closing &&
            limit < list.length && (
              <button className="section__button" onClick={this.renderMore}>
                next()
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
