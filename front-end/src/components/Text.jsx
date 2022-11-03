import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export default function Text({ size, children, asChild }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={ clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
      ) }
    >
      {children}
    </Comp>
  );
}

Text.defaultProps = {
  size: 'md',
  asChild: false,
};

Text.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
};
