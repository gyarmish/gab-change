const SubtractIcon = ({
  className = '',
  width = '16px',
  height = '16px',
  viewBox = '0 0 64 64',
  title = 'Subtract',
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
    <path d="M 61.5 29.5 L 2.5 29.5 C 1.121094 29.5 0 30.621094 0 32 C 0 33.378906 1.121094 34.5 2.5 34.5 L 61.5 34.5 C 62.878906 34.5 64 33.378906 64 32 C 64 30.621094 62.878906 29.5 61.5 29.5 Z M 61.5 29.5" />
  </g>
</svg>
)

export default SubtractIcon