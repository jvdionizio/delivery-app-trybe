/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

function TableTH({ children }, props) {
  return (
    <Slot
      className={ clsx(
        'py-2',
        'px-3',
      ) }
      { ...props }
    >
      {children}
    </Slot>
  );
}

TableTH.defaultProps = {
  asChild: false,
};

TableTH.propTypes = {
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
};

export default TableTH;
