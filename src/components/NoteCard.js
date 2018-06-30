import React from 'react'

const NoteCard = ({ children }) => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 247 207"
      fill="none"
      className="note-card"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Subtract" filter="url(#filter0_d)">
        <path
          d="M227 0H0V187H194L227 154V0Z"
          transform="translate(10 10)"
          fill="#FEF8E5"
        />
        <path
          d="M0.5 0.5H226.5V153.793L193.793 186.5H0.5V0.5Z"
          transform="translate(10 10)"
          stroke="black"
        />
      </g>
      <g id="Vector" filter="url(#filter1_d)">
        <path
          d="M0 31L31 0L31.5 31.5L0 31Z"
          transform="translate(235.5 195.5) rotate(-180)"
          fill="#FEF8E5"
        />
        <path
          d="M0 31L31 0L31.5 31.5L0 31Z"
          transform="translate(235.5 195.5) rotate(-180)"
          stroke="black"
        />
      </g>
      <foreignObject
        transform="translate(21 22)"
        style={{
          whiteSpace: 'text',
          width: '200px',
          height: '150px',
          overflow: 'hidden',
        }}
        fontFamily="Menlo"
        fontStyle="Regular"
        fontSize="18"
        letterSpacing="0em"
      >
        <span className="note-card__content">{children}</span>
      </foreignObject>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="247"
          height="207"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.996078 0 0 0 0 0.972549 0 0 0 0 0.898039 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d"
          x="199.492"
          y="157.492"
          width="41.1964"
          height="41.1964"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default NoteCard
