import PropTypes from 'prop-types';

const Case = ({ wth, hth, fill }) => {
  return (
    <svg
      width={wth}
      height={hth}
      viewBox="0 0 61 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M-0.88 35.7L-0.88 23.45L23.09 23.45L23.09 26.59L36.97 26.59L36.97 23.45L60.87 23.45L60.87 35.7L-0.88 35.7ZM27.17 23.97L27.17 20.31L32.88 20.31L32.88 23.97L27.17 23.97ZM-0.88 20.83L-0.88 6.54L18.62 6.54L18.62 -0.75L41.37 -0.75L41.37 6.54L60.87 6.54L60.87 20.83L36.97 20.83L36.97 17.69L23.09 17.69L23.09 20.83L-0.88 20.83ZM22.7 6.54L37.29 6.54L37.29 1.86L22.7 1.86L22.7 6.54Z"
        fill={fill}
      />
    </svg>
  );
};

Case.propTypes = {
  wth: PropTypes.string.isRequired,
  hth: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

export default Case;
