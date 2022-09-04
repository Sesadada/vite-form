import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
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
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  onClick: undefined
};
