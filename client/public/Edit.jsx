import PropTypes from 'prop-types';

const Edit = ({ wth, hth, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={wth}
      height={hth}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.77778 18.1111H6.04444L14.7333 8.87917L13.4667 7.53333L4.77778 16.7653V18.1111ZM3 20V15.9861L14.7333 3.54306C14.9111 3.36991 15.1074 3.23611 15.3222 3.14167C15.537 3.04722 15.763 3 16 3C16.237 3 16.4667 3.04722 16.6889 3.14167C16.9111 3.23611 17.1037 3.37778 17.2667 3.56667L18.4889 4.88889C18.6667 5.06204 18.7963 5.26667 18.8778 5.50278C18.9593 5.73889 19 5.975 19 6.21111C19 6.46296 18.9593 6.70301 18.8778 6.93125C18.7963 7.15949 18.6667 7.36806 18.4889 7.55694L6.77778 20H3ZM14.0889 8.21806L13.4667 7.53333L14.7333 8.87917L14.0889 8.21806Z"
        fill={fill}
      />
    </svg>
  );
};

Edit.propTypes = {
  wth: PropTypes.string.isRequired,
  hth: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

export default Edit;
