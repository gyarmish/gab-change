const GlobeIcon = ({
  className = '',
  width = '12px',
  height = '12px',
  viewBox = '0 0 28 28',
  title = 'Globe',
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
      <circle fill='none' stroke='#616770' stroke-width='1px' cx='14' cy='14' r='13.5' />
      <path fill='#616770' d='M 16 5 L 18 4 L 20 5 L 22 5 L 23 4 C 24 5 25 6 25 7 L 25 7 L 22 8 L 20 7 L 19 6 L 16 6 L 14 7 L 15 11 L 18 12 L 20 12 L 21 13 L 21 14 L 22 16 L 23 18 L 23 20 L 26.4 21 C 20 27 12 29 6 25 C 1 21 0 14 1 8 L 2 11 L 3 12 L 5 13 L 4 14 L 4 15 L 5 17 L 7 17 L 7 22 L 8 24 L 9 25 L 9 22 L 11 21 L 11 20 L 13 18 L 14 15 L 12 15 L 10 13 L 7 13 L 6 11 L 5 13 L 5 11 L 4 10 L 4 8 L 7 8 L 9 7 L 11 4 L 12 4 L 13 2 L 10 2 L 10 1 C 12 0 16 0 18 1 L 18 2 L 16 2 L 15 4 Z M 16 5' />
      {/*<path fill='#616770' d='M 14 27 C 21 28 28 21 28 14 C 28 6 21 0 14 0 C 8 0 3 3 1 8 L 0 8 L 1 8 C -1 15 1 24 8 26 C 10 27 12 28 14 27 Z M 24 21 L 24 20 L 24 18 C 24 18 24 18 24 18 L 22 14 L 22 13 C 22 12 22 12 22 12 L 20 11 C 20 11 20 11 20 11 L 18 12 L 15 10 L 15 8 L 16 7 L 18 7 L 19 8 C 19 8 19 8 19 8 L 22 8 C 22 8 22 8 23 8 L 25 7 C 27 12 27 17 24 21 Z M 23 4 L 22 5 L 20 4 L 18 4 C 18 4 18 4 18 4 L 16 4 L 16 4 L 16 3 L 18 3 C 18 3 18 3 18 3 L 20 2 C 21 2 22 3 23 4 Z M 8 1 L 10 2 C 10 2 10 2 10 2 L 12 3 L 12 3 L 11 4 C 10 4 10 4 10 4 L 9 6 L 7 7 L 4 8 C 3 8 3 8 3 8 L 3 10 C 3 10 3 10 3 10 L 4 11 L 4 12 L 2 10 L 2 8 C 3 5 5 3 8 1 Z M 7 17 L 5 16 L 4 15 L 4 14 L 6 12 L 7 13 C 7 13 7 14 7 14 L 10 14 L 11 16 C 11 16 11 16 12 16 L 13 16 L 13 17 L 11 19 C 11 19 11 19 11 20 L 11 21 L 9 22 C 9 22 9 22 9 22 L 9 24 L 8 24 L 7 22 L 7 17 C 7 17 7 17 7 17 Z M 1 10 L 1 11 C 1 11 1 11 2 11 L 4 13 L 3 13 C 3 13 3 13 3 14 L 3 15 C 3 15 3 15 3 15 L 4 17 C 4 17 4 17 5 17 L 7 18 L 7 22 C 7 22 7 22 7 22 L 7 24 C 8 25 8 25 8 25 L 9 25 C 9 25 9 25 9 25 C 10 25 10 25 10 25 L 10 23 L 11 21 C 12 21 12 21 12 21 L 12 20 L 13 18 C 13 18 13 18 13 18 L 14 15 C 14 15 14 15 14 15 C 14 15 14 15 14 15 L 12 15 L 11 13 C 11 13 10 13 10 13 L 7 13 L 6 11 C 6 11 6 11 6 11 C 6 11 6 11 6 11 L 5 11 L 5 11 C 5 11 5 10 5 10 L 4 10 L 4 9 L 7 8 C 7 8 7 8 7 8 L 10 7 C 10 7 10 7 10 7 L 11 5 L 12 4 C 12 4 12 4 13 4 L 13 2 C 13 2 13 2 13 2 C 13 2 13 2 13 2 L 10 1 L 9 1 C 12 0 16 0 18 1 L 18 2 L 16 2 C 16 2 15 2 15 2 L 14 4 C 14 4 14 4 15 5 C 15 5 15 5 15 5 L 16 5 C 16 5 16 5 16 5 L 18 5 L 19 5 C 19 5 19 5 19 5 L 22 6 C 22 6 22 6 22 5 L 23 5 C 24 5 24 6 25 7 L 22 7 L 20 7 L 19 6 C 19 6 19 6 19 6 L 16 6 C 16 6 16 6 16 6 L 14 7 C 14 7 14 7 14 8 L 14 11 C 14 11 15 11 15 11 L 18 13 C 18 13 18 13 18 13 L 20 12 L 21 13 L 21 14 C 21 15 21 15 21 15 L 23 18 L 23 20 C 23 20 23 20 23 20 L 24 21 C 20 27 11 28 6 24 C 1 21 0 15 1 10 Z M 1 10' /> */}
    </g>
  </svg>
)

export default GlobeIcon
