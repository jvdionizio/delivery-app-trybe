/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

function Button({ children, asChild }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={ clsx(
        'py-4 px-3 bg-cyan-500 rounded font-sans font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
      ) }
    >
      {children}
    </Comp>
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
