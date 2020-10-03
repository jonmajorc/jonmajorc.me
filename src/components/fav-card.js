/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx, Styled } from 'theme-ui'

const FavCard = ({ className, ...props }) => {
  return (
    <div
      sx={{ ...sx.container, backgroundColor: props.isHighlighted && 'b' }}
      className={className}
    >
      <div
        sx={{ ...sx.content, path: { fill: props.isHighlighted ? 'w' : 'b' } }}
      >
        {props.icon}
        <Styled.h5
          className="bold"
          sx={{ ...sx.title, color: props.isHighlighted ? 'beige' : 'b' }}
        >
          {props.title}
        </Styled.h5>
        <span sx={{ ...sx.text, color: props.isHighlighted ? 'beige' : 'b' }}>
          {props.text}
        </span>
        <button sx={sx.button}>7 Years Exp.</button>
      </div>
    </div>
  )
}

let sx = {
  container: {
    height: 340,
    width: 334,

    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    height: 237,
    width: 175,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: [1],
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: 'greenPastel',
    border: 'none',
    color: 'w',
    borderRadius: '0px 25px 25px',
    fontWeight: 'bold',
  },
}

export { FavCard }
