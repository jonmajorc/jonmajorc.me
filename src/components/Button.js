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
    border: 'borderBlack1px',
    borderRadius: '0px 25px 25px 25px',
    padding: '16px 23px',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'lowercase',
    fontFamily: 'button',
    textDecoration: 'none',
    cursor: 'pointer',
    boxShadow: 'shadow2',
    transition: 'zoom',

    ':hover': {
      transform: 'scale(1.02)',
      boxShadow: 'shadow1',
    },
  },
}

export { Button }
