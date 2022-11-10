/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

function Button({ children, remove }, props) {
  return (
    <Slot
      className={ clsx(
        'py-4',
        'px-3',
        'bg-yellow-500 rounded',
        'font-bowlby',
        'font-semibold',
        'tracking-widest',
        'text-black',
        'text-sm w-full',
        'transition-colors',
        'hover:bg-yellow-600',
        'hover:ring-2',
        'ring-black',
        'hover:outline-none',
        {
          'font-sans font-bold px-2 py-3 tracking-wide': remove,
        },
      ) }
      { ...props }
    >
      {children}
    </Slot>
  );
}

Button.defaultProps = {
  asChild: false,
  remove: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
  remove: PropTypes.bool,
};

export default Button;
