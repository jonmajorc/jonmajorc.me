/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const ButtonWrapper = (props) => <button {...props} />

const Button = ({ className, ...props }) => {
  let Container = props.to ? Link : ButtonWrapper

  return (
    <Container sx={sx.button} className={className} to={props.to}>
      <span>{props.children}</span>
    </Container>
  )
}

let sx = {
  button: {
    background: 'transparent',
    border: 'buttonBorder',
    borderRadius: 4,
    padding: '13px 52px',
    textTransform: 'lowercase',
    fontFamily: 'button',
    textDecoration: 'none',
    cursor: 'pointer',

    '& span': {
      color: 'orange',
      fontWeight: 'semibold',
      fontSize: 1,
    },

    ':hover': {
      transition: 'all 250ms linear',
      border: 'buttonBorderHover',

      '& span': {
        color: 'w',
      },
    },
  },
}

export { Button }
