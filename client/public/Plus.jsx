import PropTypes from 'prop-types';

const Plus = ({ wth, hth, fill }) => {
  return (
    <svg width={wth} height={hth} viewBox="0 0 43 43" fill="none">
      <path
        id="Vector"
        d="M18.95 23.04L-0.13 23.04L-0.13 18.95L18.95 18.95L18.95 -0.13L23.04 -0.13L23.04 18.95L42.12 18.95L42.12 23.04L23.04 23.04L23.04 42.12L18.95 42.12L18.95 23.04Z"
        fill={fill}
      />
    </svg>
  );
};

Plus.propTypes = {
  wth: PropTypes.string.isRequired,
  hth: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

export default Plus;
