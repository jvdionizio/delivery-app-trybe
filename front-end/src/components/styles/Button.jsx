/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

function Button({ children }, props) {
  return (
    <Slot
      className={ clsx(
        'py-4 px-3 bg-yellow-500 rounded font-bowlby font-semibold text-black text-sm w-full transition-colors focus:bg-yellow-600 focus:ring-2 ring-black focus:outline-none',
      ) }
      { ...props }
    >
      {children}
    </Slot>
  );
}

Button.defaultProps = {
  asChild: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
};

export default Button;
