import PropTypes from 'prop-types';

const ArrowDown = ({ wth, hth, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={wth}
      height={hth}
      viewBox="0 0 7 5"
      fill="none"
    >
      <path d="M3.5 5L0 0H7L3.5 5Z" fill={fill} />
    </svg>
  );
};
ArrowDown.propTypes = {
  wth: PropTypes.string.isRequired,
  hth: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

export default ArrowDown;
