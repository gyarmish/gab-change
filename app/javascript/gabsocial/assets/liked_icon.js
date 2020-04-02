const LikedIcon = ({
  className = '',
  width = '26px',
  height = '26px',
  viewBox = '0 0 48 48',
  title = 'Liked',
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
      <path d='M 25.398438 0.214844 C 24.757812 0.488281 24.449219 0.703125 23.945312 1.238281 C 22.875 2.34375 22.414062 3.507812 21.601562 7.117188 C 21.375 8.109375 21.09375 9.140625 20.972656 9.414062 C 20.851562 9.675781 20.382812 10.3125 19.921875 10.828125 C 19.472656 11.34375 18.195312 12.890625 17.101562 14.269531 C 15.992188 15.648438 14.746094 17.136719 14.316406 17.578125 L 13.527344 18.375 L 9.601562 18.375 C 7.445312 18.382812 5.382812 18.421875 5.035156 18.460938 C 3.46875 18.664062 2.210938 19.820312 1.882812 21.355469 C 1.742188 22.011719 1.734375 40.621094 1.875 41.351562 C 2.089844 42.476562 2.933594 43.539062 4.003906 44.042969 L 4.546875 44.296875 L 9.46875 44.34375 C 13.847656 44.390625 14.445312 44.417969 14.90625 44.570312 C 15.1875 44.652344 16.753906 45.167969 18.375 45.703125 C 24.777344 47.804688 25.867188 48 31.246094 48 C 34.367188 48 34.800781 47.980469 35.652344 47.804688 C 37.265625 47.484375 38.644531 46.800781 39.769531 45.757812 C 41.296875 44.34375 42.132812 42.523438 42.253906 40.3125 C 42.289062 39.523438 42.328125 39.375 42.5625 39.039062 C 42.964844 38.464844 43.453125 37.445312 43.679688 36.710938 C 43.941406 35.878906 44.101562 34.433594 44.015625 33.636719 C 43.96875 33.09375 43.988281 32.953125 44.183594 32.558594 C 44.710938 31.527344 44.925781 30.601562 44.980469 29.195312 C 45.007812 28.386719 44.980469 27.683594 44.914062 27.382812 C 44.8125 26.898438 44.8125 26.886719 45.28125 25.941406 C 45.964844 24.5625 46.144531 23.765625 46.152344 22.21875 C 46.164062 21.179688 46.125 20.820312 45.957031 20.222656 C 45.5625 18.835938 44.933594 17.839844 43.742188 16.707031 C 43.117188 16.117188 42.730469 15.84375 42.066406 15.515625 C 40.613281 14.804688 40.492188 14.785156 36.957031 14.738281 C 34.085938 14.710938 33.835938 14.691406 33.871094 14.550781 C 33.898438 14.464844 34.078125 13.996094 34.265625 13.519531 C 34.996094 11.617188 35.242188 9.945312 35.070312 7.902344 C 34.828125 5.070312 34.191406 3.421875 32.804688 2.054688 C 32.316406 1.566406 31.949219 1.320312 31.199219 0.957031 C 29.839844 0.28125 28.960938 0.0742188 27.28125 0.0273438 C 26.015625 -0.0078125 25.882812 0.0078125 25.398438 0.214844 Z M 7.820312 37.039062 C 8.324219 37.179688 8.972656 37.808594 9.101562 38.277344 C 9.320312 39.085938 8.960938 39.898438 8.222656 40.3125 C 7.105469 40.949219 5.738281 40.210938 5.644531 38.914062 C 5.578125 38.035156 6.09375 37.285156 6.9375 37.050781 C 7.378906 36.917969 7.398438 36.917969 7.820312 37.039062 Z M 7.820312 37.039062' />
    </g>
  </svg>
)

export default LikedIcon