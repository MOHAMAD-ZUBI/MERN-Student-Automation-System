import PropTypes from 'prop-types';

const Graduate = ({ wth, hth, fill }) => {
  return (
    <svg
      width={wth}
      height={hth}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 14.1667V8.41667L10 12.5L0.833374 7.5L10 2.5L19.1667 7.5V14.1667H17.5ZM10 17.5L4.16671 14.3333V10.1667L10 13.3333L15.8334 10.1667V14.3333L10 17.5Z"
        fill={fill}
      />
    </svg>
  );
};

Graduate.propTypes = {
  wth: PropTypes.string.isRequired,
  hth: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

export default Graduate;
