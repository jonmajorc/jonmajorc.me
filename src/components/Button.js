/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

const Button = ({ className, ...props }) => {
  return (
    <button sx={sx.button} className={className}>
      <span>{props.children}</span>
    </button>
  )
}

let sx = {
  button: {
    background: 'transparent',
    border: 'buttonBorder',
    borderRadius: 4,
    padding: '13px 52px',
    textTransform: 'lowercase',

    '& span': {
      color: 'orange',
      fontWeight: 'semibold',
      fontSize: 2,
    },
  },
}

export { Button }
