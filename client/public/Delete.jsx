import PropTypes from 'prop-types';

const Delete = ({ wth, hth, fill }) => {
  return (
    <svg
      width={wth}
      height={hth}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.32106 13.6465H6.6612V4.10475H5.32106V13.6465ZM9.3388 13.6465H10.6789V4.10475H9.3388V13.6465ZM1.07763 17V2.03301H0V0.768041H4.64135V0H11.3586V0.768041H16V2.03301H14.9224V17H1.07763Z"
        fill={fill}
      />
    </svg>
  );
};

Delete.propTypes = {
  wth: PropTypes.string.isRequired,
  hth: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

export default Delete;
