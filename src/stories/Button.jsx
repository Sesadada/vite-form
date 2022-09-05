import PropTypes from 'prop-types';

export const Button = ({ primary, backgroundColor, label, ...props }) => {
  const mode = primary ? 'bg-pink-300' : 'bg-blue-300';
  return (
    <button
      type='button'
      className={` rounded-xl px-6 py-2 text-white ${mode}`}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  onClick: undefined
};
