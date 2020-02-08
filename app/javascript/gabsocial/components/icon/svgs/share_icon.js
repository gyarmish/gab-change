const ShareIcon = ({
  className = '',
  width = '16px',
  height = '16px',
  viewBox = '0 0 24 24',
  title = 'Share',
}) => (
  <svg
    className={className}
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    width={width}
    height={height}
    viewBox={viewBox}
    xmlSpace='preserve'
    aria-label={title}
  >
    <g>
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line stroke='#666' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line stroke='#666' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </g>
  </svg>
)

export default ShareIcon