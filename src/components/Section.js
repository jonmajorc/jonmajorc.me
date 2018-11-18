import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'gatsby'

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

    if (typeof this.props.children === 'function') {
      content = this.props.children({
        list: list.slice(offset, offset + limit),
      })
    } else {
      content = this.props.children
    }

    const { id, section: sectionName, opening, closing } = this.props

    const sectionClass = cx('section', this.props.className)

    return (
      <section id={id} className={sectionClass} data-closing={closing}>
        <header className="section__header" data-opening={opening}>
          <span>{sectionName || 'section'}</span>
        </header>
        {available ? (
          <div className="section__content">{content}</div>
        ) : (
          <p className="coming-soon">(Comming Soon)</p>
        )}
        <span className="section__closing">{closing}</span>
        {limit < list.length && (
          <Link to="/notes" className="section__btn" onClick={() => {}}>
            .more()
          </Link>
        )}
        {this.props.btnToRender}
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
  children: PropTypes.any,
}

export default Section
