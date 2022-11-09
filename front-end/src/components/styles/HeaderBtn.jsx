/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

function HeaderBtn({ children, selected }, props) {
  return (
    <Slot
      type="button"
      className={ clsx(
        'py-4',
        'px-3',
        'bg-transparent',
        'font-bowlby',
        'font-semibold',
        'text-md',
        'tracking-widest',
        'text-black',
        'text-sm',
        'transition-colors',
        {
          'border-b-2': selected,
        },
        {
          'border-yellow-500': selected,
        },
        {
          'text-yellow-500': selected,
        },
      ) }
      { ...props }
    >
      {children}
    </Slot>
  );
}

HeaderBtn.defaultProps = {
  asChild: false,
  selected: false,
};

HeaderBtn.propTypes = {
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
  selected: PropTypes.bool,
};

export default HeaderBtn;
