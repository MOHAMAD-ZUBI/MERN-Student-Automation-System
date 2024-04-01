import PropTypes from 'prop-types';

const ArrowUp = ({ wth, hth, fill }) => {
  return (
    <svg width={wth} height={hth} viewBox="0 0 23 22" fill="none">
      <path id="Vector" d="M11.5 0L23 21.74L0 21.74L11.5 0Z" fill={fill} />
    </svg>
  );
};

ArrowUp.propTypes = {
  wth: PropTypes.string.isRequired,
  hth: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

export default ArrowUp;
